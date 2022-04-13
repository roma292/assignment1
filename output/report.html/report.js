$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/assignmentFeature.feature");
formatter.feature({
  "name": "Assignment 1 - sauce demo website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify adding multiple options in cart and checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "name": "user is on saucedemo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AssignmentSteps.user_is_on_saucedemo_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in using correct credential",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_logged_in_using_correct_credential(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds required item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_adds_required_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceeds to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_proceeds_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the following details for checkout",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "PostalCode"
      ]
    },
    {
      "cells": [
        "abc",
        "def",
        "400087"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_enters_the_following_details_for_checkout(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirm checkout",
  "keyword": "When "
});
formatter.match({
  "location": "AssignmentSteps.user_confirm_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify final confirmation messagge",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignmentSteps.user_verify_final_confirmation_messagge()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify adding removing then adding and checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "name": "user is on saucedemo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AssignmentSteps.user_is_on_saucedemo_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in using correct credential",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_logged_in_using_correct_credential(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds one item and then remove that item to go back",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_adds_one_item_and_then_remove_that_item_to_go_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds required item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_adds_required_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceeds to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_proceeds_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the following details for checkout",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "PostalCode"
      ]
    },
    {
      "cells": [
        "abc",
        "def",
        "400087"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_enters_the_following_details_for_checkout(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirm checkout",
  "keyword": "When "
});
formatter.match({
  "location": "AssignmentSteps.user_confirm_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify final confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignmentSteps.user_verify_final_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify sort low to high",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "name": "user is on saucedemo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AssignmentSteps.user_is_on_saucedemo_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in using correct credential",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_logged_in_using_correct_credential(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sorts item low to high",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_sorts_item_low_to_high()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds required item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_adds_required_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceeds to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_proceeds_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the following details for checkout",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "PostalCode"
      ]
    },
    {
      "cells": [
        "abc",
        "def",
        "400087"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentSteps.user_enters_the_following_details_for_checkout(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirm checkout",
  "keyword": "When "
});
formatter.match({
  "location": "AssignmentSteps.user_confirm_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify final confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignmentSteps.user_verify_final_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
});