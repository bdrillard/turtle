(ns turtle.core
  (:require [monet.canvas :as canvas]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(def turtle-img
  (let [img (js/Image. 48 48)
        src "file:///home/aleksander/Programming/workshops/turtle/resources/public/img/turtle.jpg"]
    (set! (.-src img) src)
   img)) 

(def rock-img
  (let [img (js/Image. 48 48)
        src"file:///home/aleksander/Programming/workshops/turtle/resources/public/img/rock.png"]
    (set! (.-src img) src)
    img))


(def lettuce-img
  (let [img (js/Image. 48 48)
        src"file:///home/aleksander/Programming/workshops/turtle/resources/public/img/lettuce.png"]
    (set! (.-src img) src)
    img))

(def canvas-width 800)
(def canvas-height 600)

(def canvas-dom 
  (.getElementById js/document "canvas"))

(def monet-canvas
  (canvas/init canvas-dom "2d"))

(def ctx
  (canvas/get-context canvas-dom "2d"))

(defn draw-grid!
  []
  (canvas/add-entity monet-canvas :grid
                     (canvas/entity nil
                                    nil
                                    (fn [ctx value]
                                      (doseq [i (range 0 canvas-height 50)]
                                        (-> ctx
                                            (canvas/begin-path)
                                            (canvas/move-to 0 i)
                                            (canvas/line-to canvas-width i)
                                            (canvas/stroke)))
                                      (doseq [j (range 0 canvas-width 50)]
                                        (-> ctx
                                            (canvas/begin-path)
                                            (canvas/move-to j 0)
                                            (canvas/line-to j canvas-height)
                                            (canvas/stroke)))))))

; grid is 12 x 16

(def level {:lettuce {:x 50 :y 0}
            :rocks nil})

;(def level {:lettuce {:x (* 15 50) :y 0}
;            :rocks nil})

;(def level {:lettuce {:x (* 15 50) :y 0}
;            :rocks (for [y (range 0 550 50)]
;                     {:x 300 :y y})})

;(def level {:lettuce {:x (* 15 50) :y 0}
;            :rocks (concat (for [y (range 0 550 50)
;                                 x (range 50 800 200)]
;                             {:x x :y y})
;                           (for [y (range 50 600 50)
;                                 x (range 150 800 200)]
;                             {:x x :y y}))})

(defn draw-items!
  []
  (canvas/add-entity monet-canvas :rocks
                     (canvas/entity nil
                                    nil
                                    (fn [ctx value]
                                      (doseq [rock (:rocks level)]
                                        (-> ctx
                                            (canvas/save)
                                            (canvas/draw-image rock-img (assoc rock :w 48 :h 48))
                                            (canvas/restore))))))
  (canvas/add-entity monet-canvas :lettuce
                     (canvas/entity nil
                                    nil
                                    (fn [ctx value]
                                      (-> ctx
                                          (canvas/save)
                                          (canvas/draw-image lettuce-img (assoc (:lettuce level) :w 48 :h 48))
                                          (canvas/restore))))))

(defn turtle-attr
  [turtle attr]
  (-> turtle deref attr))

(defn update-turtle
  [turtle value]
  (-> value
      (assoc :x (turtle-attr turtle :x))
      (assoc :y (turtle-attr turtle :y))))

(defn turtle-entity
  [turtle]
  (canvas/entity {:x (turtle-attr turtle :x)
                  :y (turtle-attr turtle :y)}
                 (fn [value] (update-turtle turtle value))
                 (fn [ctx value]
                   (-> ctx
                       (canvas/save)
                       (canvas/draw-image turtle-img (assoc value :w 48 :h 48))
                       (canvas/restore)))))

(defonce turtle (atom {:x 0 :y 0}))

(defn ^:export isLettuceNear
  []
  (or (= (:lettuce level) (assoc @turtle :x (+ 50 (:x @turtle))))
      (= (:lettuce level) (assoc @turtle :x (- 50 (:x @turtle))))
      (= (:lettuce level) (assoc @turtle :y (+ 50 (:x @turtle))))
      (= (:lettuce level) (assoc @turtle :y (- 50 (:x @turtle))))))


(defn ^:export move
  [dir]
  (case dir
    "up"     (swap! turtle assoc :y (- (:y @turtle) 50))
    "down"   (swap! turtle assoc :y (+ (:y @turtle) 50))
    "left"   (swap! turtle assoc :x (- (:x @turtle) 50))
    "right"  (swap! turtle assoc :x (+ (:x @turtle) 50))))

(defn ^:export eat
  []
  (if (or (= (:lettuce level) (assoc @turtle :x (+ 50 (:x @turtle))))
          (= (:lettuce level) (assoc @turtle :x (- 50 (:x @turtle))))
          (= (:lettuce level) (assoc @turtle :y (+ 50 (:x @turtle))))
          (= (:lettuce level) (assoc @turtle :y (- 50 (:x @turtle)))))
    (do 
      (println "Ate the lettuce!")
      (canvas/remove-entity monet-canvas :lettuce))
    (println "There's no lettuce there :(")))

(defn on-js-reload []
  (draw-grid!)
  (draw-items!)

  (canvas/add-entity monet-canvas :turtle-entity
                     (turtle-entity turtle))

  (canvas/draw-loop monet-canvas)

)
