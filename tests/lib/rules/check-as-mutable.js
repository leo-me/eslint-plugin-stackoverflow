/**
 * @fileoverview check if someone added a asMutable from seamless-immutable
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/check-as-mutable"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("check-as-mutable", rule, {

    valid: [

        // give me some code that won't trigger a warning
    //    {
    //     code: 'var a = b.c;',
    //    }
    ],

    invalid: [
        {
            code: "var mutableArray = Immutable().asMutable();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
