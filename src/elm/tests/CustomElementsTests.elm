module CustomElementsTests exposing (suite)

import CustomElements exposing (incrementingButton)
import Expect
import Html exposing (node)
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "CustomElements"
        [ testIncrementingButton ]


testIncrementingButton : Test
testIncrementingButton =
    test "incrementing-button" <|
        \_ ->
            incrementingButton [] []
                |> Expect.equal (node "incrementing-button" [] [])
