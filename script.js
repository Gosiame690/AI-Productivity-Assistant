let selectedTool = "";

const toolNames = {
    email: "Email Generator",
    meeting: "Meeting Summariser",
    tasks: "Task Planner",
    research: "Research Assistant",
    chat: "Workplace Chat"
};


function selectTool(tool) {

    selectedTool = tool;

    document.getElementById("toolTitle").innerText =
        toolNames[tool];

    const input = document.getElementById("userInput");

    const placeholders = {

        email:
            "Example: Write a professional email to my manager requesting a meeting about my project.",

        meeting:
            "Paste your meeting notes here. Example: John presented the project update...",

        tasks:
            "Example: Help me create a plan to complete the quarterly business report.",

        research:
            "Example: Research the benefits of AI in workplace productivity.",

        chat:
            "Example: How can I improve my productivity during a busy work week?"
    };

    input.placeholder = placeholders[tool];

    input.focus();

    document
        .querySelector(".workspace-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function generateResponse() {

    const input =
        document.getElementById("userInput").value.trim();

    const response =
        document.getElementById("response");


    if (!selectedTool) {

        response.innerText =
            "Please select one of the productivity tools first.";

        return;
    }


    if (!input) {

        response.innerText =
            "Please enter a request before generating a response.";

        return;
    }


    response.innerText = "Generating response...";


    setTimeout(function () {

        let result = "";


        if (selectedTool === "email") {

            result =
`Subject: Request for a Meeting

Dear Manager,

I hope you are doing well.

I would like to request a meeting to discuss the matter
outlined in your request.

Please let me know a suitable time for us to meet.

Kind regards,
[Your Name]

AI note:
Please review and personalise this email before sending.`;

        }


        else if (selectedTool === "meeting") {

            result =
`MEETING SUMMARY

Overview:
The meeting discussed the main topics provided in the meeting notes.

KEY DISCUSSION POINTS
• Review of current progress
• Identification of outstanding items
• Discussion of next steps

ACTION ITEMS
1. Review outstanding tasks
2. Assign responsibilities
3. Confirm deadlines
4. Follow up on progress

DECISIONS
• The team should continue with the agreed project activities.

AI note:
Verify the summary against the original meeting notes.`;

        }


        else if (selectedTool === "tasks") {

            result =
`TASK PLAN

Goal:
${input}

Recommended Tasks:

1. Define the objective
2. Gather the required information
3. Break the work into smaller activities
4. Prioritise the most important tasks
5. Complete the first priority task
6. Review the completed work
7. Make improvements
8. Submit or implement the final result

Suggested Priority:
HIGH – Define requirements
HIGH – Gather information
MEDIUM – Complete main work
MEDIUM – Review
LOW – Final improvements

AI note:
Adjust the priorities and deadlines based on your actual situation.`;

        }


        else if (selectedTool === "research") {

            result =
`RESEARCH BRIEF

Research Question:
${input}

OVERVIEW

Artificial intelligence is increasingly being used to improve
workplace productivity by helping employees automate repetitive
tasks and process information.

KEY AREAS TO INVESTIGATE

• Automation of repetitive tasks
• AI-assisted communication
• Meeting summarisation
• Information retrieval
• Task prioritisation
• Employee productivity

KEY CONSIDERATION

AI-generated information should be verified using reliable
sources before being used for important business decisions.

RECOMMENDED NEXT STEP

Compare information from multiple credible sources and document
the evidence supporting your findings.

AI note:
This is an example research response and should be verified
with authoritative sources.`;

        }


        else if (selectedTool === "chat") {

            result =
`WORKPLACE AI ASSISTANT

You asked:
${input}

Suggested response:

Start by identifying the most important outcome you need to
achieve. Break the work into smaller actions, prioritise the
urgent items and allocate realistic time for each activity.

You can then use AI to help draft documents, summarise
information and generate ideas while retaining human review
and decision-making.

AI reminder:
Always verify important information and avoid sharing
confidential workplace data.`;

        }


        response.innerText = result;

    }, 700);
}
