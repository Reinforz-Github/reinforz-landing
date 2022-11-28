export const changeLog = [
  {
    sprint: 23,
    startDate: '19-11-2022',
    features: [
      `You can now add explanations for the answers to your fib questions. Click on "Add explanation" ➕ to add an explanation for each answer or "Remove explanation" to remove it.`,
      `You will now be able to view the hints you've used per question on the report page. Click on the "Hints used" button, and it will open up a modal with all the hints, along with an 👁️ icon to indicate that you've used that hint, Click on "Generate Questions," paste your passage, and let our model generate questions.`,
      `You can now view the explanations added for each answer of snippet and fib questions 👀`,
      `We have added support for superscript and subscript formatting to the question editor. Click on the X^2 or X_2 buttons on top to enable them`,
      `Aside from the main question, you can now add alternate questions. Click on Add alternate to type the alternate with rte support. When playing the question, any of those questions will be used. This will ensure that nobody memorizes the question while answering 🧠 `,
      `We now show the explanation for each answer of your fib and snippet questions on the report page (if they exist). This will help you understand the reason behind the answer 🧠`,
    ],
    improvements: [
      `We have relocated our privacy and terms page to a static route under our landing page.
 And we also made it responsive! 🚀`,
    ],
    fixes: [],
  },
  {
    sprint: 22,
    startDate: '12-11-2022',
    features: [
      `You will now be able to view the hints for a question, by clicking on the Hints button. It will open up a modal where you can click on "Show Hint", to view each individual hint.`,
      `You can now finally generate questions using our model 🧠 Click on "Generate Questions," paste your passage, and let our model generate questions.`,
      `You can now add explanations for the answers to your snippet and fib questions.`,
      `We now show the explanation for each answer of your fib and snippet questions on the report page (if they exist). This will help you understand the reason behind the answer 🧠`,
      `You can now use the synonym matcher for your answers. Click on "Check synonym" to activate it. When checked, "hi" would be regarded as correct even if the answer is "hello".`,
      `You will now be able to view the hints you've used per question on the report page. Click on the "Hints used" button, and it will open up a modal with all the hints.`,
      `Aside from the main question, you can now add alternate questions. Click on Add alternate to type the alternate with rte support. When playing the question, any of those questions will be used. This will ensure that nobody memorizes the question while answering 🧠`,
      `Our landing page is online! Go to https://www.reinforz.ai/ to visit our landing page! And our app platform is now hosted on https://app.reinforz.ai/.`,
    ],
    improvements: [],
    fixes: [],
  },
  {
    sprint: 21,
    startDate: '05-11-2022',
    features: [
      `You can now ignore whitespaces in answers for snippet and fib-type questions. Click on the "Ignore whitespace" checkbox under each answer to activate it ✅ When checked, both "Red Hat" and "RedHat" will be regarded as the correct answer.`,
      `If the "Ignore whitespace" modifier is turned on, it will ignore the whitespace and evaluate the answer based on the content alone.`,
    ],
    improvements: [
      `Creating a question won't close the form anymore, and it will reset the form completely.`,
    ],
    fixes: [
      `You can now keep the first blank in a FIB-type question empty. Previously, if the answer was the first word, you had to type something in the first portion of the question.`,
      `Previously, deleting any of the options or hints deleted only the last one. Now the appropriate one will be deleted.`,
      `The form input labels for text input are now back.`,
    ],
  },
  {
    sprint: 20,
    startDate: '29-10-2022',
    features: [
      `We finally have support for fill-in-the-blank questions. First, select "Fill in the Blank" from the question type dropdown, and keep adding or deleting blanks until you form the perfect question ❓`,
      `You can now view "Fill-in-the-blank" questions by clicking on the eye icon. For now, we have disabled all the blanks and the question fields.`,
      `Rich-text supported hints for each question have been added, with a maximum of 3. Click on "Add hints" to add a new hint or the delete icon to remove it.`,
      `You can now play FIB questions. Type the answer in the text fields corresponding to the blanks. The answers are judged based on whether or not the strings are the same, but we plan to improve on this feature 💯`,
      `FIB questions are now evaluated and shown on the report page. A red border means your answer didn't match the actual answer exactly, while a green border means it did ✅`,
    ],
    improvements: [],
    fixes: [
      `When selecting true/false questions from any other questions, the options were filled up with values other than True and False; thus, you couldn't create the question. This issue has been fixed.`,
      `You can now keep the first blank in a FIB-type question empty. Previously, if the answer was the first word, you had to type something in the first portion of the question.`,
    ],
  },
  {
    sprint: 19,
    startDate: '22-10-2022',
    features: [
      `You will now get quiz recommendations 🔎 on your home page based on the last ones you've played, sorted based on popularity 🥇`,
      `For your quiz, you may now upload photos. The same strategy that your profile photo 👤 used is what we're doing. Upload a photo or copy and paste the link 🔗, if appropriate.`,
      `Additionally, you may now upload images for your inquiries, which is similar to our second feature.`,
      `The alternatives for your questions can now be formatted. Use these quick methods. Ctrl + b (bold), u (underline),'(code), and I (italics) (italic)`,
    ],
    improvements: [
      `Now, both on the report page and when playing the game, you can see the question's image.`,
      `Quiz editors and admins can now view the question details, hidden for regular users by clicking on the eye 👁️ on the question card.`,
    ],
    fixes: [
      `Fixed a bug where the timer shows 0 at the last question and doesn't move to the report page.`,
    ],
  },
  {
    sprint: 18,
    startDate: '15-10-2022',
    features: [
      `You can view additional metadata about your quiz roles, like who created it, who last updated it, and when it was last updated.`,
      `You can upload a custom picture for your profile avatar 👤 `,
      `You can remove quizzes from your collections 📁 `,
      `You can add multiple quizzes to your collections at once.`,
      `You can assign quiz roles to multiple users.`,
      `You will get notifications if anyone asks for a role request on a quiz, where we have admin access.`,
      `You can fork a quiz, which will have the quiz and its questions to your quizzes.`,
      `You can now request a role in any quiz where you don't have one.`,
      `Question editor now supports rich text so that you can format questions.`,
    ],
    improvements: [
      `A helper text will be shown for the username field in the register form.`,
    ],
    fixes: [
      `You can now remove quiz roles even if there is a single admin for the quiz.`,
    ],
  },
  {
    sprint: 17,
    startDate: '08-10-2022',
    features: [
      `All tables' sort and order settings persist across page refresh.`,
      `We show you your points and followers growth chart 📊 for the week on your homepage.`,
      `You can now create collections for your quizzes with custom colours and titles`,
      `By searching, you can now assign roles (carrying certain permissions) for your quizzes to other users.`,
      `You will get notifications 🔔 whenever you are assigned/unassigned a role for a quiz`,
      `You can add quizzes to your collections.`,
    ],
    improvements: [
      `We now remove all special characters from quiz tags.`,
      `We show a much more concise error message for number input fields.`,
      `Questions cards on the quiz page now look great on a small screen.`,
      `The activity points heatmap in your profile is now limited to the current date.`,
      `We have removed the extra .00 and long trails of digits for your points.`,
      `Updated our open-graph tags to render a beautiful card wherever you paste our site.`,
      `Updated your quizzes page layout so the tab is visible while scrolling.`,
    ],
    fixes: [
      `Fixed a bug where you couldn't create the question if you changed it from multi-select to MCQ.`,
      `When clearing the value of the number input fields, we remove the leading zero.`,
      `Creating new quizzes and questions updates your XP in real-time.`,
    ],
  },
  {
    sprint: 13,
    startDate: '11-09-2022',
    features: [
      `Notification system. You will be notified whenever someone stars one of your quizzes and vice versa.`,
      `Added discord Oauth. You can now log in to Reinforz with your discord account.`,
      `We now show a settings icon for the quiz list in mobile view. Click on that to view the sort and filter.`,
      `You can now view the list of starred quizzes in a public user's profile`,
      `You can now filter quizzes based on questions and stars count`,
      `Notifications are now sorted in descending order based on their creation date.`,
      `XP will grow as soon as you do any activity that increases it (creating a quiz and question). `,
    ],
    improvements: [
      `New Custom resource not found (404) page.`,
      `Changed primary color from default blue to`,
      `Minimalistic loader and helper text during data loading stage. Previously the loader was shown on the top left.`,
      `The spinner for number type input isn't shown on hover anymore.`,
      `We removed the required mark (red star) for activity filter dates.`,
    ],
    fixes: [
      `Previously clicking on the menu items didn't redirect you to the correct page, now it does.`,
    ],
  },
  {
    sprint: 12,
    startDate: '04-09-2022',
    features: [
      `Better mobile support using mobile drawer`,
      `Support signin/signup via github`,
      `We used a custom font (Raleway), previously it used system font`,
      `You can now star and unstar a quiz, much like what github does`,
    ],
    improvements: [
      `Fixed www.reinforz.xyz not working`,
      `Quiz page showed not found even for public quizzes`,
      `Fixed deleting a question doesn't update its index. Now if you delete a question from the middle it will update the index of the rest of the questions`,
    ],
    fixes: [],
  },
];
