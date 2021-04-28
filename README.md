# myMarathonSchedule


#### Problem:
I’ve always been someone who loves adventure and exploring. In 2019, this manifested in a journey that involved running 12 marathons in the calendar year. A lot of people may argue with this, but it is my opinion that there is no better way to get to know a city and its people than through a marathon. Through the race, a person tours around the city while experiencing a range of emotions from excitement to exhaustion to joy.

During this personal project of mine though, I found it really difficult to keep track of the logistics. For example, keeping track of which races to sign up for as well as my travel and lodging arrangements. To solve this at the time, I kept everything in a Google spreadsheet.

#### Solution:
The solution to this will be an application called myMarathonJourney. With myMarathonJourney, users can keep track of their marathons and logistics all in one place. In addition, users can look at other community members’ marathon journeys.

There will be two types of users in our application: administration and community. Administration users will be responsible for moderating the community and its data, specifically removing a user from the community (by deleting the user’s profile) if it is found that the user is in violation of the code of conduct (i.e. being respectful to other users).

Community users will be able to search for marathon races and add them to their profile. Their profile page will have a list of marathons based on month and year as well as the ability to add other details such as travel and lodging. A public view of the profile will be available for other community users to search for that will only include marathon races scheduled without the travel details for privacy. In addition, community users can add a comment and like a public profile.

Non-registered users can also use the application, but will not be able to make their own Marathon journeys or interact with other profiles. Instead, non-registered users will have read access to profiles and races. When non-registered users perform an action that is reserved for registered users, they will be prompted to create an account or log in to their profile.

#### WebAPI:
One of the features of the application will be for a user to search for marathon races. The search will be by keyword and will query the API service provided by runSignup - https://runsignup.com/API/races/GET. An additional search feature may be to search by month, state, and/or country.

#### UML:
![UML](https://github.com/viddychang/myMarathonJourney/blob/main/uml.png)

#### Production:
This app can be used via https://my-marathon-journey.herokuapp.com/.
The backend for this app is in the following repository: https://github.com/viddychang/wbdv-sp21-myMarathonJourney-server-java.

