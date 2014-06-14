(ns go.core
  (:require [clojure.string :as str]))

(enable-console-print!)

(println "Hello world!")

(def board-size-choices [9 11 13 19])

(def board-size 11)

(defn square [n] (* n n))

(def board (vec (repeat (square board-size) :empty)))

;; this is just one view representation of a board
(defn board-text [board]
  (apply str
         (interpose "\n"
           (for [row (range board-size)]
             (let [start (* row board-size)]
               (str (subvec board
                            start
                            (+ start board-size))))))))

(defn turn-text [turn]
  (str "Turn: "
       (case (mod turn 2)
         0 "Black"
         1 "White")))

(defn turn-stone [turn]
  (case (mod turn 2)
    0 :black
    1 :white))

(defprotocol Stringable
  (as-str [this]))

;; everything about a game can be determined
;; from a vector of previous boards

(defrecord GameState [board turn]
  Stringable
  (as-str [this]
          (str
            (turn-text turn) "\n"
            (board-text board))))

(def game (atom (GameState. board 0)))

(turn-stone (:turn @game))

(defn place-stone [board stone x y]
  (assoc board (+ x (* board-size y)) stone))

(defn valid-move? [board stone x y]
  true)

(def board-elem (.getElementById js/document "board"))

(defn render! []
  (set! (.-innerHTML board-elem)
        (as-str @game)))

(render!)

(add-watch game :render-board
           (fn [k r o n]
             (render!)))

(def move-input (.getElementById js/document "move"))

(defn sanitize-move [move-val]
  (map js/parseInt (str/split move-val #",")))

(defn game-update-fn [x y]
  (fn [game]
    (update-in
      game
      [:board]
      place-stone
      (turn-stone (:turn game))
      x y)))

(def ENTER 13)
(defn handle-move [e]
  (when (= (.-keyCode e) ENTER)
    (let [move-val (.-value move-input)
          [x y] (sanitize-move move-val)]
      (swap! game
             (game-update-fn x y)))))

(handle-move #js {:keyCode 13})

(.addEventListener move-input "keyup" handle-move)
(.removeEventListener move-input "keyup")
