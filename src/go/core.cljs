(ns go.core)

(enable-console-print!)

(println "Hello world!")

(def board-size-choices [9 11 13 19])

(def board-size 11)

(defn square [n] (* n n))

(def board (vec (repeat (square board-size) :empty)))

(defn board-text [board]
  (apply str
         (interpose "\n"
           (for [row (range board-size)]
             (let [start (* row board-size)]
               (str (subvec board
                            start
                            (+ start board-size))))))))

(deftype GameState [board turn])

(def board-elem (.getElementById js/document "board"))

(set! (.-innerHTML board-elem) (board-text board))
