import React from 'react';
import{useHistory} from 'react-router-dom'

const Details = () => {
 const history =useHistory();
 const handleUrl = () => {
  history.push('/')
 }
 return(
  <div className="details">
  
<p >You’ll need to have Node 10.16.0 or later version on your local development machine (but it’s not required on the server). We recommend using the latest LTS version. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:</p>

  <li>npx</li> 
  <li>npm</li>
  <li>yarn</li>

 <button class="w3-button w3-orchid w3-round-xxlarge" onClick={handleUrl}>↑ Back </button>
  </div>
 
 );
};
 export default Details;