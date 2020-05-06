// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Branching example -- version 3
router.post('/crisis-support-finder/v3/finder/postcode-search-branch', function (req, res) {

    // Create postcode as a variable and ask the prototype to remember it, and look at the first two letters of the postcode
    var postcode = req.session.data['postcode'].substring(0,2).toUpperCase();
    var age = req.session.data['age'];

  // Check whether the postcode matches any of the below
  // Send user to next page based on postcode
  if (age >= 18) {
    //Check postcodes for over 18's
    if (postcode == "LS") {
      res.redirect('/crisis-support-finder/v3/finder/results-west')
    } else if (postcode == "EX") {
      res.redirect('/crisis-support-finder/v3/finder/results-south')
    } else if (postcode == "PR") {
      res.redirect('/crisis-support-finder/v3/finder/results-north')
    } else if (postcode == "CB") {
      res.redirect('/crisis-support-finder/v3/finder/results-london')
    }
    else if (postcode == "NR") {
      res.redirect('/crisis-support-finder/v3/finder/results-east')
    }
    else if (postcode == "EH" || postcode == "CF") {
      res.redirect('/crisis-support-finder/v3/finder/no-result')
    }
    else {
      // Send user to ineligible page if they use none of those postcodes
      res.redirect('/crisis-support-finder/v3/finder/results')
    }
  } else {
    //Send to generic young person's page
    res.redirect('/crisis-support-finder/v3/finder/results-young')
  }

})

// Branching example -- version 4
router.post('/crisis-support-finder/v4/finder/postcode-search-branch', function (req, res) {

  // Create postcode as a variable and ask the prototype to remember it, and look at the first two letters of the postcode
  var postcode = req.session.data['postcode'].substring(0,2).toUpperCase();
  var age = req.session.data['age'];

// Check whether the postcode matches any of the below
// Send user to next page based on postcode
if (age < 18) {
  //Check postcodes for over 18's
  if (postcode == "LS") {
    res.redirect('/crisis-support-finder/v4/finder/results-west')
  } else if (postcode == "BN") {
    res.redirect('/crisis-support-finder/v4/finder/results-south')
  } else if (postcode == "DH") {
    res.redirect('/crisis-support-finder/v4/finder/results-north')
  } else if (postcode == "SW") {
    res.redirect('/crisis-support-finder/v4/finder/results-london')
  }
  else if (postcode == "NR") {
    res.redirect('/crisis-support-finder/v4/finder/results-east')
  }
  else if (postcode == "EH" || postcode == "CF") {
    res.redirect('/crisis-support-finder/v4/finder/no-result')
  }
  else {
    // Send user to ineligible page if they use none of those postcodes
    res.redirect('/crisis-support-finder/v4/finder/results')
  }
} else {
  //Send to generic adult's page
  res.redirect('/crisis-support-finder/v4/finder/results-adult')
}

})



module.exports = router;
