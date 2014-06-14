(ns go.core)

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

(defprotocol Stringable
  (as-str [this]))

(deftype GameState [board turn]
  Stringable
  (as-str [this]
          (str
            (turn-text turn) "\n"
            (board-text board))))

(def game (GameState. board 0))

(defn place-stone [board stone x y]
  (assoc board (* x y) stone))

(def board-elem (.getElementById js/document "board"))
(set! (.-innerHTML board-elem) (as-str game))

(defn handle-move [e]
  (when (= (.-keyCode e) 32)
    (js/alert "hello")))

(def move-input (.getElementById js/document "move"))
(.addEventListener move-input "keyup" handle-move)
(.removeEventListener move-input "keyup")
