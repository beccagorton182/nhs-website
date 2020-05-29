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
  //Also store the age from the page and pass it through
  var postcode = req.session.data['postcode'].substring(0,2).toUpperCase();
  var age = req.session.data['age'];

// Check whether the postcode matches any of the below
// Send user to next page based on postcode
if (age > 18) {
  //Check postcodes for under 18's
  if (postcode == "LS") {
    res.redirect('/crisis-support-finder/v4/finder/results-west')
  } else if (postcode == "BN") {
    res.redirect('/crisis-support-finder/v4/finder/results-south')
  } else if (postcode == "DH") {
    res.redirect('/crisis-support-finder/v4/finder/results-north')
  } else if (postcode == "SW") {
    res.redirect('/crisis-support-finder/v4/finder/results-london')
  }
  else if (postcode == "PR") {
    res.redirect('/crisis-support-finder/v4/finder/results-two')
  }
  else if (postcode == "EH" || postcode == "CF") {
    res.redirect('/crisis-support-finder/v4/finder/outside-england')
  }
  else {
    // Send user to generic adult page
    res.redirect('/crisis-support-finder/v4/finder/results-general')
  }
} else {
  //Send to generic young person's page
  res.redirect('/crisis-support-finder/v4/finder/results-young')
}

})

// Branching example -- version 5
router.post('/crisis-support-finder/v5/finder/postcode-search-branch', function (req, res) {

  // Create postcode as a variable and ask the prototype to remember it, and look at the first two letters of the postcode
  //Also store the age from the page and pass it through
  var postcode = req.session.data['postcode'].substring(0,2).toUpperCase();
  var age = req.session.data['age'];
  //store larger numbers of postcodes in the prototype
  //created arrays to have area clusters
  var york = ["LS", "YO", "HG", "WF"];
  var lanc = ["PR", "WN", "BB", "LA", "FY"];
  var south = ["OX", "HP", "RG", "GU"];
  var london = ["SW", "NW", "HA", "WD", "WC", "EC", "MK"];
  var mid = ["LE", "CV", "PE"];
  var north = ["NE", "CA", "SR", "DH", "DL"];
  var east = ["CM", "SS", "RM", "IG"];
  var outside = ["EH", "CF"];

// Check the age 
if (age > 18) {
  //Check postcodes if you're over 18

// Check whether the postcode matches any of the arrays
// Send user to the page that matches the postcode
  if (york.indexOf(postcode) >= 0) {
    res.redirect('/crisis-support-finder/v5/finder/results-york')
  } 
  else if (south.indexOf(postcode) >= 0) {
    res.redirect('/crisis-support-finder/v5/finder/results-south')
  } 
  else if (lanc.indexOf(postcode) >= 0) {
    res.redirect('/crisis-support-finder/v5/finder/results-lanc')
  } 
  else if (london.indexOf(postcode) >=0) {
    res.redirect('/crisis-support-finder/v5/finder/results-london')
  }
  else if (mid.indexOf(postcode) >=0) {
    res.redirect('/crisis-support-finder/v5/finder/results-mid')
  }
  else if (north.indexOf(postcode) >=0) {
    res.redirect('/crisis-support-finder/v5/finder/results-north')
  }
  else if (east.indexOf(postcode) >=0) {
    res.redirect('/crisis-support-finder/v5/finder/results-east')
  }
  else if (outside.indexOf(postcode) >=0) {
    res.redirect('/crisis-support-finder/v5/finder/outside-england')
  }
  else {
    // Send user to generic adult page
    res.redirect('/crisis-support-finder/v5/finder/results-general')
  }
} else {
  //Send to generic young person's page
  res.redirect('/crisis-support-finder/v5/finder/results-young')
}

})






module.exports = router;
