<?php include 'header.php';
?>
    <style>
    p
    {
      font-size: 1em;
    }
    img
    { 
      display:block;
      text-align: center;
      margin: 0 auto;
      width: 400px;
    }
    div.image:hover img.jasperimages
    {
      display: block;
      text-align: center;
      margin: 0 auto;
      width: 900px;
    }
    
    .caption{
      text-align: center;
      margin: 0 auto;
    }
    </style>

      
<h2>Link to Our Prototype</h2>
<h3><a href='hfid.olin.edu/sa2016/losninos/hfid_los_ninos/prototype/'>Click here for our prototype</a></h3>
<h2>Some example scenarios one can go through</h2>
<p>
Fill out a profile and filter other people and places based on desired traits<br>
Find a few people you like based on their profiles, add them to your bookmarks, and contact them<br>
Find other people who are interested in the same house you are<br>
View group requests and accept or decline invitations to a group, invite others to your group<br>
</p>
<h2>What is Roomie</h2>
<p>
Our project, Roomie, helps to solve the problem of matching people with the roommates and places they need. Finding a roommate and place to live is very difficult and unsafe, with sites like craigslist being the best available option. The product we designed assists users with finding roommates as well as finding places for them to live. A lot of affordable apartments require at least 2 people to move in, although some people do not have that many people they trust, especially when moving to a new area. Once logged on, users can search for people and places on the map view. 
</p>
<br>

<h2>How did we come up with it?</h2>
<p>
All of our team members have gone through the experience of having to find roommates or a place to live before for summer jobs. It's a difficult process, especially if you don't know anyone in the city you're moving to. We wanted to build something that would help people find great roommates and a place to live, and to feel safe secure during the process. 
</p>
<br>

<h2>Who is the service designed for, and what are its needs?</h2>
<p>
Anyone looking for roommates or a place to live can use our service, however our target users are those age 18-35. They're looking for short to medium term housing, roughly 2 months to 5 years. They are budget conscious and can't afford their own place in the city they're moving to. We chose these users because we think they are the ones most likely to need to use our service, as they're the ones looking for cheap housing or short term housing during internships. Their primary needs are to feel safe, to find compatible roommates, and to save money.
</p>
<br>
<p>
As one user said, "as a young woman looking for housing in an unfamiliar place, safety is absolutely my top priority." Our users need to feel safe and to find a safe place for them to live. Especially when moving to an unfamiliar city, they want to know they're not moving in with a serial killer.
</p>
<br>
<p>
Next, we interviewed many users who had roommates that they felt safe with, but were a terrible match with. One example is the roommate who constantly berated her roommate for being Jewish, or the roommate who always left their dishes in the sink. Our users want to find roommates that they'll get along with, or even become friends with. 
</p>
<br>
<p>
Finally, our users have important financial needs. They are generally looking for a room on Roomie because they can't afford their own place. We need to give our users tools to find a place to live within their price range. 
</p>
<br>
<h2>The Site Itself</h2>
<p>
When a user first uses Roomie, they will first view the login screen. The login screen contains a few pointers on how to use the website. It also contains a section to sign up or sign in to access the rest of the website. If they are a new user, they will view the profile screen next where they can update their basic information, such as their name, date of birth and phone number, and also their interests and characteristics to improve the roommate finding experience.
</p>
<br>
<div class = "image"><img src="./imgs/final/profile.png" class='jasperimages'></div><br>
<p class='caption'>Profile fields</p>
<br>
	
<p>
The profile section contains four sections: basic information, about me, hobbies and deal breakers. 
The goal in designing this section was trust and compatibility. In websites such as Craigslist most profile postings are anonymous and impersonal. We wanted our users to feel that there is a real person behind the information they're seeing, so we've designed a Badges feature and a Facebook connect feature. Badges serve as a way to distinguish apart from others using icons. Users that sign up with Facebook receive a Facebook badge, which is displayed on the user's profile. This badge serves as a sign of trust that there is someone real behind their text.
</p>
<br>
<div class = "image"><img src="./imgs/final/profile-personal.png" class='jasperimages'></div><br>
<p class='caption'>Personal profile</p>
<br>
<p>
When the user fills out their content, they see the "crossed-off eye" icon, which designates what information will not be shared without explicit consent. This informs the user what content will be seen by others, giving them discretion over what information they fill. This guideline empowers our users with a sense of security and that their personal information is kept safe.
</p><br>
<div class = "image"><img src="./imgs/final/profile-personal.png" class='jasperimages'></div><br>
<p class='caption'>About me and hobbies section</p>
<br>
<p>
The about me and hobbies section details information that users fill out to let others know general information about themselves and their preferences. This information will be used to help others filter for roommates based on their sleeping and noise habits. The hobbies section is another way to filter out roomates based on their hobbies. We made this section optional because it's not critical information to finding a roommate, but can help improve compatibility matching.
</p>
<br>
<div class = "image"><img src="./imgs/final/profile-dealbreakers.png" class='jasperimages'></div><br>
<p class='caption'>Deal-breakers section</p>
<br>
<p>
The team added the deal breakers section, which are text entries where users can briefly note any needs, such as dietary restrictions and concerns about pets that other users should know about. These are the needs that absolutely must be met, and as such are an easy way to filter and search for other roommates. During our heuristic analysis, our users were concerned that there was no other option to filter other than by gender, cleanliness and noisiness habits. They felt that it was easier to find roommates having the user's preferences explicitly stated than having to contact the person. While this design reduces a degree of human interaction, it efficiently improves the user experience in finding a roommate.
</p>
<br>
<div class = "image"><img src="./imgs/final/map.png" class='jasperimages'></div><br>
<p class='caption'>The map view</p>
<br>
<p>
After completing his or her profile, the user is presented a familiar map view of people and places, along with a list view next to the map view. The map view was created to help users comfortably explore quick information about people who are interested in living in the same area as themselves. The list view on the right is a product of several user interviews where users were looking for the familiar list-view interface that other alternatives such as facebook and craigslist provide. By giving the option to explore both a map view and a list view, the interface eases new users into a familiar experience.
</p>
<br>
<div class = "image"><img src="./imgs/final/map_places.png" class='jasperimages'></div><br>
<p class='caption'>More info on places</p>
<br>
<p>
Many users expressed interest in being able to view apartment listings on the map and on the list view, so place listing was implemented. In order to give the users a greater sense of trust than they would feel on a site like craigslist, the apartment listings include information on the person who would be renting the apartment out along with information on the place itself so the user could get a feel for who they would be living with. If the user is more concerned with finding places than compatible people as some of our interviewees were, they can use the "Interested People" functionality to find and connect with other people interested in the apartment they are looking at. Because we were not able to interview anybody who would be listing their apartment, we abstracted out the process of adding listings and created some sample listings for tests.
</p>
<br>
<div class = "image"><img src="./imgs/final/map_people.png" class='jasperimages'></div><br>
<p class='caption'>People information and filters</p>
<br>
<p>
The primary interaction for finding compatible roommates takes place on the map screen's filters. Users can quickly filter other users by traits that they desire so they can focus on detailed information for users that fit what they want. By messing around with the filters, the user is able to judge how common their desired traits are and when they may need to compromise because they are being too picky. When the user has selected the baseline traits they want and have narrowed the presented users down with the filters, they can move on to viewing more info about the users.
</p>
<br>
<div class = "image"><img src="./imgs/final/map_trust.png" class='jasperimages'></div><br>
<p class='caption'>More information on a person and their badges</p>
<br>
<p>
When the user is ready to learn more about somebody, they can click the "More Info" button to learn more detailed information about the person. Here they can get a better understanding of the user by reading up on their age, gender, dealbreakers, hobbies, self-description, bedtime, cleanliness, and noisiness, and their occupation. Fields like bedtime, cleanliness, and noisiness were determined to be valuable baselines to the users we interviewed that all users shared, so they are included on every profile. While the exact interaction for standardizing noisiness and cleanliness still need to be figured out, our users were excited to be able to filter others by common traits such as these. More customizable fields such as deal breakers, descriptions, and hobbies are a result of the interest our interviewees expressed in being able to customize their profile to convey what they wanted about their personality.
</p>
<br>	
<p>
Badges were included in the profile view in order to help users feel more secure in contacting others. The badges are icons that represent verification such as information on mutual Facebook friends, site verification, and whether or not the users went to the same school. The badges themselves will likely require more user research to flesh out, but the current badges are based on user feedback that said that the badges should only represent verification information to maximize their usefulness.
</p>
<br>
<div class = "image"><img src="./imgs/final/bookmarks.png" class='jasperimages'></div><br>
<p class='caption'>Bookmarks screen</p>
<br>
<p>
If a user has decided that they are interested in another user's profile, they can bookmark them or even contact them. Bookmarks were an interaction created to address the issues some of our users had with the Facebook and Craigslist alternatives. In order to shortlist listings on the alternative sites, our interviewees would have to open up lots of tabs, go through each one, and bookmark the ones they liked while closing the ones they did not. With built in bookmarking functionality, the users are not inconvenienced by missing functionality that they must use their browser to supplement.
</p>
<br>
<div class = "image"><img src="./imgs/final/contacted.png" class='jasperimages'></div><br>
<p class='caption'>Contacted users screen</p>
<br>
<p>
When the user has decided they are ready to contact people, they may select people and contact them individually. The options for contacting others include mutual confirmations before sharing emails or phone numbers, or a built in chat feature for users who are uncomfortable giving out personal information. While sites like craigslist require users to publicly list contact information, our site keeps it all private and lets the user explicitly choose who they share it with, directly addressing the security concerns our interviewees had with craigslist.
</p>
<br>
<div class = "image"><img src="./imgs/final/group.png" class='jasperimages'></div><br>
<p class='caption'>Groups view</p>
<br>
<p>
When the user has decided that they are interested in living with someone, they can create a group with that person. Users who we interviewed were concerned that people they were trying to create plans with would flake on them and pursue other housing opportunities with other people last minute. The group is a safeguard for that, as it designates that the users have agreed to live together and creates a commitment that otherwise would not exist. This interaction helps the user feel safe about his or her future roommate situation, but is also optional, so people who are not ready to commit to something have more flexibility.
</p>
<br>
<h2>Conclusions</h2>
<p>
Over the course of the semester, we have interviewed users, determined their needs, and created and iterated on a design that we are very proud of. While certain interactions regarding what types of information our users want to share and how they want to share it are still unclear, we believe that we have an excellent concept based on a real problem space that we can expand with further research and user feedback. By coming up with creative interactions to solve issues that our users have had with previous solutions to the roommate finding space and taking inspiration from existing designs, we believe that we have produced an excellent overall user interaction in the compatible roommate finding space.
</p>


    </div>
  </body>
</html>