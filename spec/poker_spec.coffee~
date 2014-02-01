assert = require "assert-plus"
poker = require "poker"

describe "the app", ->
  it "should rank the given example hands", ->
    input = """
            Kc 9s Ks Kd 9d 3c 6d
            9c Ah Ks Kd 9d 3c 6d
            Ac Qc Ks Kd 9d 3c
            9h 5s
            4d 2d Ks Kd 9d 3c 6d
            7s Ts Ks Kd 9d
            """

    output = """
             Kc 9s Ks Kd 9d 3c 6d Full House (winner)
             9c Ah Ks Kd 9d 3c 6d Two Pair
             Ac Qc Ks Kd 9d 3c Pair
             9h 5s High Card
             4d 2d Ks Kd 9d 3c 6d Flush
             7s Ts Ks Kd 9d Pair
             """
    assert.equal poker.rank(input), output
