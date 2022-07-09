module CustomElements exposing (incrementingButton)

import Html exposing (node)


incrementingButton : List (Html.Attribute msg) -> List (Html.Html msg) -> Html.Html msg
incrementingButton =
    node "incrementing-button"
