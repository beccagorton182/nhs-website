// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Branching example
router.post('/crisis-support-finder/finder/postcode-search-branch', function (req, res) {

    // Create postcode as a variable and ask the prototype to remember it, and look at the first two letters of the postcode
    var postcode = req.session.data['postcode'].substring(0,2).toUpperCase();
  
    // Check whether the postcode matches any of the below
    // Send user to next page based on postcode
    if (postcode == "LS"){
      res.redirect('/crisis-support-finder/finder/results-west')
    } else if(postcode == "EX") {
        res.redirect('/crisis-support-finder/finder/results-south')
    } else if(postcode == "PR") {
        res.redirect('/crisis-support-finder/finder/results-north')
    } else if(postcode == "CB") {
        res.redirect('/crisis-support-finder/finder/results-london')
    }
     else if(postcode == "NR") {
    res.redirect('/crisis-support-finder/finder/results-east')
}
    else {
      // Send user to ineligible page if they use none of those postcodes
      res.redirect('/crisis-support-finder/finder/results')
    }
  
  })




module.exports = router;
