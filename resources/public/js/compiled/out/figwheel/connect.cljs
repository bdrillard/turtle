(ns figwheel.connect (:require [turtle.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/turtle.core.on-js-reload (apply js/turtle.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'turtle.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})
