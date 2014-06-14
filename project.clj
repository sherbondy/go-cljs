(defproject go "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2234"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "go"
              :source-paths ["src"]
              :compiler {
                :output-to "go.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
