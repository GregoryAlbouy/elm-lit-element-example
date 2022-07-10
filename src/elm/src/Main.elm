module Main exposing (Model, main)

import Browser
import CustomElements exposing (incrementingButton)
import Html exposing (Html, div, h1, text)
import Html.Attributes exposing (class)


type alias Model =
    String


view : Model -> Browser.Document msg
view model =
    { title = model
    , body =
        [ viewWelcome model
        ]
    }


viewWelcome : String -> Html msg
viewWelcome message =
    div [ class "welcome" ]
        [ h1 [] [ text message ]
        , incrementingButton [] []
        ]


main : Program () Model msg
main =
    Browser.document
        { init = \_ -> ( "Elm + Lit Element", Cmd.none )
        , update = \_ model -> ( model, Cmd.none )
        , subscriptions = \_ -> Sub.none
        , view = view
        }
