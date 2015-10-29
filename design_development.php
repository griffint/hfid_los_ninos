<?php include 'header.php';
?>
    <div>
      <div class="body">Our design development page is here</div>

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


<h1>Design Development</h1>

<h2>Introduction / Process</h2>

<p>In order to develop the desired roommate finding application, we created and tested some paper prototypes in order to turn one into a wireframe for our final application. Our first step was to develop several possible paths for us to prototype. We used our intuition and our Needs Analysis study to determine the best prototype to continue with. Once we had selected a prototype, we created a paper prototype and tested it with several users. This gave us evidence and ideas for how to improve. After improving our paper prototype, we tested again and found even more changes to make. This process gave us confidence that our changes were the best for our users. By the end of our last interview, one of our testers said that 'they would never want to use any other roommate finding application again'. 
<br><br>
Below we detail our testing process and results. Some pictures will be included inline, and the rest will be viewable in the appendix at the bottom of the page. </p>
<br><br>
<h2>From Three Ideas to One</h2>

<p>In our first iteration, we came up with three very different designs based on our initial inspirational designs. Our goal was to come up with designs that were fundamentally different from each other so we could contrast them and pick the features we liked the most from each. The designs were based on both the findings from our Needs Analysis study and inspirational designs we discovered.
<br><br>
<div class = "image"><img src='./imgs/initialdesigns/tournament.jpg' class='jasperimages'></div><br>
<p class='caption'>Tournament Style</p>
<br><br>
One design was called 'Tournament Style', where the user would be presented two other users, and he would select which one he preferred. This process would continue until the program is able to give him a ranking of his top matches. The tournament matching system provided an interesting way to meet our interview founded needs of matching compatible users. However, we scrapped the design as the experience was not as natural for older age groups. It had no support for actual listings, and it had no way to address concerns with security and scams which were all criteria from our needs based on of observations from interviews. 
<br><br>
<div class = "image"><img src='./imgs/initialdesigns/meetup.jpg' class='jasperimages'></div><br>
<p class='caption'>Meetup Style</p>
<br><br>
The next design we considered was a design dubbed 'Meetup' where the user inputs information such as his hobbies and living information (bedtime, cleanliness, etc), then fills out the same information for what he or she would like to see in a roommate. The program then displays users based on how well they match the user's listed preferences. The list can be sorted and filtered, and when the user is content , they can contact the users they feel they match well with. The goal of Meetup was to solve the issue one of our interviewees during our initial user interviews was having with finding a group of people to find a place with. Ultimately, the Meetup design was rejected, as it once again did not support listings and took power away from the user by matching them with somebody algorithmically. It similarly did not explicitly provide any of the security interactions that our users valued. Several parts of the Meetup design, however, were brought to the first paper prototype as they did an excellent job fulfilling the roommate matching needs. 
<br><br>
<div class = "image"><img src='./imgs/initialdesigns/airbnb.jpg' class='jasperimages'></div><br>
<p class='caption'>Airbnb Style</p>
<br><br>
The final design we came up with was dubbed 'Airbnb', and it was a location-based room finding service combined with basic roommate finding. In the service, the user fills out a basic profile and then is presented with a map view. The user can filter this map view to show only listings with desired traits. When the user clicks a listing, it brings up more information on it and lets the user view a list of other users interested in the selected listing. In this Interested Users screen, the user can chat with other users and form groups to live in houses. The Airbnb design was created to help provide a middle ground for people more familiar to the Craigslist and Zillow interfaces and room finding services, allowing us to directly address the need to be accessible for the lowest common denominator of users who only understand Craigslist's simple interface. The Airbnb design is the design that became the framework for our first prototype, but because it was missing roommate matching features, it needed lots of modifications.
<br><br>
<div class = "image"><img src='./imgs/initialdesigns/combined.jpg' class='jasperimages'></div><br>
<p class='caption'>Initial design Combination</p>
<br><br>
After mapping out user interactions, we came up with a basic flow diagram of how a user would find other users and a place to live with our design. Based on personal experience with similar sites, we decided to allow the user as much interaction as possible without signing up so they could get a taste of what the service provides before they are forced to sign up. We sketched up a rough draft of our screen flow on a poster before creating prototypes, which exposed several holes in our interface.
<br><br>
<div class = "image"><img src='./imgs/paperproto1/peoplemap.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 1 Map of People</p>
<br><br>
Our paper prototype first presented the user with a choice between finding roommates and finding houses, which, depending on the user selection, brought the user to either the people map view or the places map view. These map views were reminiscent of the Airbnb design map view, with filters on the type of person and apartment on the left and more information on the person/place on the right. The filters on the left allowed the user to search by things like price and location for rooms, and hobbies, gender, age, and interests for people. The people map view was an addition unique to the paper prototype based on our outlined need of providing a way to match roommates effectively. The user can view what people are interested in a specific apartment so they can more easily find roommates who fit their financial and location based needs.
<br><br>
<div class = "image"><img src='./imgs/paperproto1/signup1.jpg' class='jasperimages'></div><br><br>
<div class = "image"><img src='./imgs/paperproto1/signup2.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype1 signup sheets</p>
<br><br>
When the user attempts to contact or favorite a person or place, they are prompted with a login screen. This screen first gets basic information such as name, age, email, phone number, and the option to connect with Facebook. The Facebook connection was widely requested in our initial interviews and would help us meet the security needs outlined in our design needs. The user is then directed to a screen where they fill out hobby roommate specific questions pulled from our Meetup design. These questions aid our design in meeting our need to create compatible roommate matches. Finally, the user is asked to drop his or her location preference pin which marks which area the user would prefer living in. After signing up, the user can favorite people and places, add his or herself as interested in a place, and view verification badges such as mutual facebook friends and school information that help give the user a sense of security that they will not be scammed.
<br><br>
<div class = "image"><img src='./imgs/paperproto1/teams.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 1 Team window</p>
<br><br>
Given that one of our target users is a user who is looking for a group of people to fill a place with, we wanted to help cater to the specific needs of this interaction. Through our interviews, we learned that people are generally concerned that plans will fall through or that it would be difficult to get the correct number of people to fill a place. We devised the team interaction to quell these concerns. Teams were designed to be a way for people to commit to living with each other, adding people they felt confident living with to the team until they had enough people to go forward with their plan.
<br><br>
Finally, we decided to abstract out the interaction involving listing a place on the site due to a lack of evidence and access to renters. We believed that our most valuable interaction is the interaction between roommates and the act of finding a room. We had very little evidence to prove that housing posters would get more value out of our site than something like Craigslist. As a result, we decided to focus on creating a paper prototype for roommate hunters.</p>
<br><br>
<h2>Interview Debrief and Takeaways</h2>
<br><br>
<p>Following our previous paper prototype, we made a few major design decisions after conducting our paper prototyping session with our testers, who we will name Simon, Bert and Kira as pseudonyms. We had shown them our prototypes drawn on paper and asked them to complete several tasks to create a housing group. They contained several screens including a map view of houses and people, user sign-in, 'Favorites' section, which denotes their favorite listings and people profiles, and 'Team' section, where the user would manage housing group related matters, such as inviting people or exiting a group. Our interviewees would go through most of our interface, and we would follow up with questions prompting them to complete the rest of the tasks planned for them. During our session with them, we had validated some assumptions that we had about our users and also discovered some issues with your designs, which we had for our second prototype. 
<br><br>
<div class = "image"><img src='./imgs/paperproto1/placemap.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 1 Places Map</p>
<br><br>
The first screen that each user sees is the option to search for a housing group by people or by room. Based on the option selected, the user would see a map of people or listings in San Francisco. The person or listing that is clicked on would then be shown on the side panel of the map view with its details. 
<br><br>
Our testers, Simon and Bert, opted for finding a group based on finding rooms first, and had navigated the prototype using the map view of finding rooms first. Simon and Bert had asked questions like 'How can I search for the price per person?' and voiced their interest in the format of Craigslist, which allowed them to quickly look through several houses with pictures and prices. Bert had mentioned that in finding a housing group, he 'opens a one hundred tabs [on Craigslist] and emails all [the renters]' and finds a housing group to fill the listing. This had indicated to us that our users also want a time-efficient way of finding available housing listings.
<br><br>
<div class = "image"><img src='./imgs/paperproto2/mapbothpin.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 2 Place Map with Pin</p>
<br><br>
We felt that our housing search process needed to be optimized to find a housing group more quickly. This process is aligned with our initial interviews, where our users had said they felt nervous about finding a place to live on time. One change we had considered is to remove the map view and replace with a list view. However, we realized that this was important for our users who wanted to search a room geographically based on where their workplace was in our initial inquiry interviews.
<br><br>
Our team had decided on the combination of a map and list format, which the user could use to navigate available rooms on the map, while viewing several other potential rooms similar to the layout of rooms shown on AirBnB and pins on Pinterest. We feel that the redesign of our map view improved our users needs by allowing them to streamline their room search process while still allowing other users the option to find rooms geographically on a map.
<br><br>
<div class = "image"><img src='./imgs/paperproto2/largeplacedesc.jpg' class='jasperimages'></div><br>
<p class='caption'>Larger Place Description</p>
<br><br>
We noticed our testers would not use the 'Interested People' section on each listing at the side panel, which indicated people interested in the listing. For example, Simon and Bert had not clicked or even noticed the 'Interested People' section we had for each listing in the side panel. This was an interaction that we had previously designed to assist users in finding roommates based on their interest in the room. Our fix was to make the 'Interested People' section more visible, we placed it higher on each listing at the side panel. 
<br><br>
<div class = "image"><img src='./imgs/paperproto2/filters.jpg' class='jasperimages'></div><br>
<p class='caption'>Map Filters</p>
<br><br>
Afterwards, they had gone to the map view screen of people. Each profile had badges of user profiles who were also interested in finding roommates. These badges are similar to those on AirBnb, which indicate whether a user is verified, frequently uses the website and their favorite hobbies. 
<br><br>
<div class = "image"><img src='./imgs/paperproto2/largepeopledesc.jpg' class='jasperimages'></div><br>
<p class='caption'>Large People Description</p>
<br><br>
During our test, we noticed that Simon and Bert had simulated clicking and speaking out loud while viewing the badges. They both commented on the Facebook friends badge and Verification badge. Simon had tried to click the Facebook friends badge in hopes to find his friends. This validated our assumption that our users want a feature that helps them find people they can trust. However, they had not interacted or mentioned badges for the user's hobbies and sleep schedules, which had indicated to us that hobbies were less important than we had previously thought. 
<br><br>
Originally, we had no system for placing badges on a user's profile. After our user interviews, badges in the order that our users care about: verification and mutual connections, cleanliness and sleep schedule, then hobbies. We considered removing badges that were not relevant to safety and security, but this idea had contrasted with ideas from our initial interviews who cared more about the housing group and their personality types. For example, one of our initial interviewees was especially concerned with crazy roommates. We agreed that there needed to be a more seamless interface for users who 'value a sense of security' but also wanted to assist people who also care about personality types of their housing group. 
<br><br>
Safety for our users is very important, especially among female users who 'value a sense of security' in our initial interviews. When we asked our testers to find a housing group to find rooms with, Kira had first navigated to a map view of people, which indicates her preference in finding a group first. She had also wanted to use the filtering feature to find verified users. We noticed that she felt stuck using the filter and when prompted, she mentioned that she had hoped she could filter people based on their verification status. This new filtering capability would further our user group's experience in finding people they trust. 
<br><br>
<div class = "image"><img src='./imgs/paperproto2/expandedpeople.jpg' class='jasperimages'></div><br>
<p class='caption'>Tournament Style</p>
<br><br>
We had also changed the labelling of our sections from our first paper prototype to the second. Initially, we had chosen the term 'Team' to reflect our user's commitment to finding housing with a group. However, we discovered that 'Team' was more confusing to understand than 'Group'. Additionally, we had designed a section called 'Favorites', which allows a user to view their favorite rooms and places. In a debrief, one of our testers expressed discontent with using the 'Favorites' section to 'short-list' people. We think that the renaming to 'Bookmarks' more accurately represents the user's actions.</p>
<br><br>
<h2>Paper Prototype 2 and Beyond</h2>
<br><br>
<p>After making our second paper prototype, we decided to do more user testing to further refine our design. We brought in a user (hereafter referred to as Arya, a pseudonym) and did a lengthy and detailed test. Here we'll detail user errors and interesting interactions we saw in the different sections of our site and the changes we want to make in response to them. 
<br><br>
During the initial parts of our testing, Arya was quickly able to see the number of interested people using the Interested People section located in the side panel on map view. However, she mainly viewed the people interested as competition for that room, which was  not what our intended purpose for the feature. When she saw a room with only two interested people, she said 'Oh, I might have a better shot at that one'. We want the Interested People section to be a tool to meet people who are interested in similar room types and price ranges as the user. To help solve this problem, we will omit this field if someone is just searching for a single room. This is not meant to be a way to apply to a room as it is meant to find people. We imagine that our bar design makes it seem like there is a limited number of 'slots' for people to join. Instead, we'll present is as 'two other people interested in this place. Want to say 'Hi'?'  This change has not yet been tested, but we believe it is a step in the right direction towards solving the interaction.
<br><br>
<div class = "image"><img src='./imgs/paperproto2/signup1.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 2 Signup Sheet 1</p>
<br><br>
When creating her profile, Arya didn't use the Facebook signup option and instead manually entered her information, citing worries about privacy issues on Facebook. However, when she later found out that she can view mutual friends of potential roommates through their badges, she wanted to sign up with Facebook. In order to address this, we will have a short text blurb under the Facebook button detailing the benefits of Facebook integration. Additionally, it may be useful to add some privacy settings regarding facebook integration, but it may not be necessary. 
<br><br>
<div class = "image"><img src='./imgs/paperproto2/signup2.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 2 Signup Sheet 2</p>
<br><br>
One other small interface change involved our slider for sleep and wake times. Arya was concerned that our chart may be confusing for people with very strange schedules, so instead of putting wake and sleep times on the same slider we will put them on separate sliders that can be at any hour of the day. 
<br><br>
<div class = "image"><img src='./imgs/paperproto2/people.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 2 People Map with Pin</p>
<br><br>
Aray didn't grasp quickly what the location drop pin was for. We intended it to serve as a beacon for others to see where you most wanted to live, but Arya said that the was geographically quite flexible and would rather be able to select multiple areas or neighborhoods in which she could potentially live, or turn her pin from a point to a radius around a point to expand the area she would be interested in living in. To facilitate this, we may add a feature where she can highlight cells on a grid that she would be interested in living in. This would be easy for the user and would allow them to intuitively 'paint' over the areas they like. 
<br><br>
<div class = "image"><img src='./imgs/paperproto2/bookmarks.jpg' class='jasperimages'></div><br>
<p class='caption'>Prototype 2 Bookmarks</p>
<br><br>
During our interview, bookmarking a person or place took the user to the bookmarks screen to view their bookmarks. Arya thought this was not a useful interaction, and would rather just stay on the page she was  on. Additionally, we will mark users or places that have been bookmarked as such, and remove the add to bookmarks button. 
<br><br>
Previous to this interview, we had assumed that users would be fine  with chatting with potential roommates through a service of their own choosing, such as Facebook or e-mail. We actually found that Arya would prefer an integrated chatting service, both for convenience and for safety. She said that 'it adds an extra layer of protection'. Going forward, we will be adding a very simple chatting service that people and groups can use to chat amongst themselves. 
<br><br>
There were a couple of interface changes we thought up during our interview with Arya for the map view. There was no way to distinguish between people or places on the map that are bookmarked, have been contacted, or are in the same group. A simple color coding scheme with a legend would provide a clear visual guide for what status the rooms are. Additionally, hovering over a card in the sidebar will cause that icon on the map to 'highlight', and vice versa. 
<br><br>
Finally, we have discussed the potential of a short introductory tutorial sequence quickly brief the user on things like badges and what they mean, as well as the concept of groups and more basic details of how the site works. We're not sure if this is a necessary feature or just a byproduct of bad design.</p>
<br><br>
<h2>Conclusion</h2>
<br><br>
<p>
In our paper prototyping phase, we had set out to validate and improve our design, which aims to make the roommate hunting experience seamless. As a result of our paper prototypes, we were able to validate our designs driven by our initial user interviews. We had a few interface flaws in our design based on our paper prototyping tests, which we feel have since been improved. We feel confident that these changes were grounded in findings from initial interviews and prototyping feedback.</p>


      <ul class="row">
      <?php
        function images($dir) {
        $files1 = scandir($dir);
        foreach ($files1 as $x=>$value)
        {
            if ($value == "." || $value == ".."){
                unset($files1[$x]);
            }
        }
        foreach ($files1 as $x=>$value)
        {

            echo "<li class=\"col-md-6\"><img class=\"img-responsive\" src=\"$dir$value\"></li>";
        }
        }
        images("imgs/initialdesigns/");
        images("imgs/paperproto1/");
        images("imgs/paperproto2/");
      ?>
      </ul>

      <div class="modal fade" id="my<a href="http://www.jqueryscript.net/tags.php?/Modal/">Modal</a>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

        <div class="modal-dialog">

          <div class="modal-content">

            <div class="modal-body"> </div>

          </div>

        </div>

      </div>

    </div>
  </body>
  <script src="photo-gallery.js"></script>
</html>

