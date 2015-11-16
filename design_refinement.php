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
    <div class="body">Our design development page is here</div>
    	<h1>Design Refinement</h1>
    	<h4>The link below will take you to our working prototype. Information about this assignment can be found below</h4>
    	<a href="prototype/index.html">Prototype</a>
        <br>
        <h4>The below link will download our heuristic feedback as a pdf. </h4>
        <a href="HeuristicEvaluationforLosNinos.pdf">Heuristic Feedback</a>
        <br>
        <h2>Prototype testing instructions</h2>
        <br>
        <p>Our prototype is a functioning html site with a not fully functional backend. That is, you can test most interactions but your data will not be 
        persistently saved. Below we've laid out some tasks for you to try that our personas would have to do in their daily usage of our site. 
        </p>
        <h5>Task 1</h5>
        <p>Create an account by registering with the site, and fill out your profile with some basic and advanced information.</p>
        <h5>Task 2</h5>
        <p>Go to the map view and look through the people and places that are available. Use filters to narrow your search, and add someone to your bookmarks.</p>
        <h5>Task 3</h5>
        <p>Go check out your bookmaks, look at more info to find out more about them.</p>
        <h5>Task 4</h5>
        <p>Look at your pending group requests, and accept or reject whatever one seems better</p>
    	<br>
        <h2>Design refinement writeup</h2>
		<h3>Our Design</h3>
        <br><p>Our selected design is a web application with several views. Its main components include a profile section with two subsections, basic and advanced, a map section with the ability to look for both rooms and roommates, bookmarked section, contacted section, and groups section. This design arose from a need to help users find compatible roommates with a sense of safety and security, as current solutions such as Craigslist do not address these values.
                In order to achieve these values of security and compatibility , we designed an application that helps users search for roommates based on their personal traits, and search for places for these users to live with each other. The interface starts with a sign-up page, where the fill in basic information such as email and password to create an account. They are next directed to the map view section where they can look for roommates or places with the option of using filters. The filters are our primary interaction for finding other compatible people, as they let the user filter other users by personal traits such as age, gender, bedtime, and cleanliness. The user can then click on a person or a place on the map in order to have a "card" displayed on the righthand side of the screen. These cards contain information such as the name of the person, their age, and their badges, or in the case of a place, a picture of the place and basic price and bedroom information. The badges for these cards compress important information verifying that the user is a real and trusted person into small icons with explanations available upon hovering over them.
				<br>
                If the card is a place, the user can add themselves to the "Interested People" section to show others that they are interested in the listing or navigate to the card's "More Info" section, where they can contact the renter. If the card is a person, they could add that person to the "Bookmarks" page or navigate to a card's "More Info" section, where they can view even more information on the person and contact the person. The prototype also contains a "Bookmarks" and "Contacts" section, which allow the users to manage the people and places they've bookmarked and contacted. This helps organize their roommate search. It also contains a "Group" section where the user can manage the pending group requests and the group they are in. There is a placeholder link for a group chat section, which, when implemented, will help give the user a sense of security by letting them chat with other users in their group.</p>
        <br>
		<h3>Designing the Wireframes</h3>
        <p>After completing our second paper prototype, we created wireframes and went through a cognitive walkthrough. This helped us find holes and make improvements on our interface. We found that we needed to  to make the interface more intuitive by simplifying its design and by adding design mappings that can aid the user in our design.
		<br>
            Some design choices we made were improvements on our second paper prototype that we had not drafted because we did not consider it to be a main part of our prototype. One area of improvement was the chat feature. When we drafted our wireframes, we found that it would be useful to have a chat feature similar to Facebook's, where conversations between users would persist at the bottom of the page. When a user clicked the "Contact" button on a card, it would start a conversation and a box would show up on the bottom of the page. (FIGURE) We had made this design choice so that our users could always maintain a thread of communication while navigating anywhere on our site. 
			<br>
            The other area of improvement was the "Group" section. Our team knew there were some potential use cases that our interfaces was not designed for, so we wanted to make that section more polished while making our wireframes. Our "Group" section had only one page, which showed a user's "Pending Groups" and "Your Group". (FIGURE) We decided to have several pages for the state, for cases such as when the user wants to leave a group, join a different group and etc. We had also wanted our users to be able to communicate within their group, so we added a group chat feature. (FIGURE) We felt that this added a sense of safety and security since users are encouraged to communicate on our platform, as oppposed to having to give out their personal email or other contact information.
			<br>
            We also made some changes from our second paper prototype based on learning new design principles. Our team believed that our wireframes had too much content in the front. Our team had learned that too much content could negatively impact the user experience. We wanted there to be less text, so one design decision was to remove the "Contact" option on people's cards located at the righthand side of the "Map" section. (FIGURE)  We did not think it negatively affected usability, since we did not expect our users to contact a person's card, which contains limited personal information.
            We also wanted to improve the interactivity of our prototype. After completing our wireframes, we started to think about the usability based on its interactivity. When we had gone through our cognitive walkthrough, we found that some elements were best suited to be hoverable and others clickable. We decided that it is consistent to use hovering to display content over the images of our badges and user actions on our cards, such as "Contact", "Bookmark", "Add Myself" and etc. to be clickable.
			<br>
            We also felt that coach marks could effectively guide our users through our interface. (FIGURE) After our exercise with our cognitive walkthrough, we felt that navigating through our interface with our wireframes was challenging. We had wanted to encourage our users to sign up and fill out their profile to help them be better matched to other people. We could not come up to use our interface to cue our user to fill out their profile page, so we felt that coach marks were the best option. </p>
        <br>
		<h3>From Wireframes to Websites</h3>
        <p>For our prototype, we got ambitious and wanted to implement a fully realized website with a working backend as our prototype. We decided to use Bootstrap for the grid system, and also for some pre-baked HTML and CSS components. Additionally, we used AngularJS to control all components, and use Firebase as a remote backend. We wanted to have a website that looked, functioned, and saved data the way our real product would. 
			<br>
            When we were nearing the deadline, we had done a lot of work but were not as far along as we had liked. The backend wasn't working well at all, and our relative lack of experience with Angular development was hurting our productivity. At this point, we decided we needed to pivot to a MVP that was a little more minimum. We analyzed all the features we were trying to build, and threw away all the ones that weren't needed in order to test the core interface of the product. Most of these features involved the working backend, which wasn't important to testing the usability of the interface anyways. We decided that having a working group chat wasn't very important, as well as much of the saving and retrieving data in the backend. Instead of actually saving to a database, we just put sample data in all the areas it would have loaded from the backend. With this mindset, we were able to focus more on the design and user experience parts of our website, which were the important things we should have been more worried about in the first place. 
<br>
            We changed some features going from the wireframes to the prototype website. On the wireframe, the signup screen was contained in 2 separate screens, while in the prototype we had those 2 screens, and another for basic email/password login. This was done mainly for technical reasons, as our email/password signin actually did work while the rest of the profile couldn't be saved in any way. Additionally, in the wireframe there was a button that would expand the single column of small cards into 2 or 3 columns if users preferred that to the map view for looking through places. This did not make it to the website, again mainly because of technical limitations. We also omitted the people and places header buttons from that listview partly because of time limitations, and also because users could select from between these 2 in the filters on the mapview itself. Finally, we didn't have a gallery of pictures for each house listing, instead just having one thumbnail due to time limitations. 
<br>
            With these eliminations in mind, we had to identify the key features to implement before the code freeze. The first of these features is the fully functional map view, where clicking on an icon on the map brings up the corresponding information card. Given that this is one of the primary interactions of the site, we decided it was mandatory that it made it into the prototype. The next feature was the filters that narrowed displayed results on the map. This was our primary interaction for finding other matching people, so it seemed necessary to include it. The next features were the bookmarks and contacts screens which were populated with random data. We believed that it was important to perform the interactions on those screens, such as investigating the cards, removing bookmarks, and viewing more information on the cards so the user could draw the connections between the map screen and these screens. Another feature we included was the process of filling out one's profile. We believed that it was important to put the user through this so they could better understand where the other users' information came from. Finally, we wanted to have the user go through the interaction of accepting and declining group requests so they could understand the intention we had in mind for the groups interaction.</p>
        <br>
		<h3>Insights</h3>
        <p>Through both heuristic and personal evaluations, we had several insights that we can take away from the design our prototype. Some of the most important insights we took away from this design centered around the user's interactions with other people. We have determined that we need to further explore what kinds of traits our users care about beyond what time they go to sleep, how clean they are, and how loud they are based on feedback from our evaluators. Our evaluators also expressed concern over standardizing cleanliness and noisiness, leading us to believe that having the user rate these traits based on a number scale may not be the best interaction. We realized that we need to further improve the user's interaction with badges so they are easily understood, as our evaluators expressed confusion regarding our current method of hovering over a badge to learn what it means. Finally, the evaluators expressed vocal concerns about privacy, leading us to realize that we need to give users better control over what is made public, what a logged in user can see, and what is hidden from other users.
<br>
            Other insights centered around the user's interaction with the interface itself. Our evaluators claimed that some of the buttons are clear, which means that we will need to go in and overhaul some of the buttons such as replacing the people-dot representations with actual people icons. By changing our design to meet the standards of other websites, we will help make the user interaction more comfortable as they will be used to the visual queues we provide. This standardization will include things like streamlining our profile setup into one page, as our users were confused by what we meant by basic and advanced profile, thinking they were two different types of profiles. Both our team and our evaluators noticed consistency issues in the interface, specifically things like linking profile information pop ups to people's avatars which were available on some pages but not on others. We will need to take another pass at the interface to make sure that interactions on one page of the interface work the same as other pages, and that pages are connected and linked in the ways we originally intended going into the prototype. Finally, given that a lot of the choices presented to the user were big deals such as joining a group or removing somebody from your contacts, we realized that we would need to give the user the choice to undo or confirm such choices so they would feel more secure in all of the interactions they perform.
			<br>
			<img src="./imgs/prototype_screenshots/filter.png">
			<br>
			<p>The filters of our design</p>
<br>
            Finally, we received lots of feedback on our filtering interaction and gained some insights into how our users would use the filtering system. One of the biggest complaints our evaluators had with the filters is that they constantly had to click apply when they updated their filters. Another issue they had was getting no results after applying their filters. From this feedback, we ascertained that they wanted a much more responsive filtering system where things updated in real time. We believe we can further improve responsiveness by listing how many things will fit a given criteria, letting the user make more educated selections in their filters. In addition to responsiveness, people raised concerns in wanting to separate searching by people and places. We believe we can incorporate this interaction in our filters by creating more separation between people and place filters, and creating bigger and more noticeable buttons to enable/disable people or places.</p>
        <br>
		<h3>Further Investigations</h3>
        <p>From our insights, we discovered several areas of discussion we will need to figure out by our final design. These areas include the following:</p>
        <ul>
            <li>Many of our evaluators expressed interests in more identifying user traits. What are some more important identifying traits besides noise and cleanliness? How important are things like allergies, pets, and religion to the user, and should users be able to pick what kinds of traits they search for and display?</li>
            <li>We realized that our users may be confused by putting a number to their cleanliness. How do we standardize traits like cleanliness and noisiness, and should we move away from a number scale to another representation to accomplish this?</li>
            <li>Our evaluators were confused by some of the terms we used to describe interactions, such as the basic and the advanced profile. What standards do other websites use, and what areas can we modify so our site fits these standards?</li>
            <li>Our evaluators had big problems with privacy, specifically being able to view users' full profiles without even logging in. What do we want to display to logged in, contacted, and anonymous users, and how can we empower the user to both understand and control what is displayed?</li>
            <li>Through our own development of the interface, we realized that there is overlap between people that show up in contacted, people that show up in groups, people that show up in bookmarks, and people that show up on the map. Where do we want this overlap to exist, and where would it be better to show the user on only one screen? Is this something we should let the user decide?</li>
            <li>Our site doesn't communicate clearly what the purpose and mission is the first time a user visits. Perhaps we could add a short blurb or diagram on the landing page the first time a user visits?</li>
        </ul>
        <!--Code to create images of all of wireframes-->
        <h2>Photo Gallery of Wireframes</h2>
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
        images("imgs/wireframes/");
      ?>
      </ul>

    </div>
  </body>
  <script src="photo-gallery.js"></script>
</html>