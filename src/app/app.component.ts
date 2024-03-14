import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  data = {
  "action": {
    "isNewQueryButtonVisible": false,
    "isLikeDislikeVisible": true,
    "isCopyToClipboardVisible": true,
    "isShowReferences": true
  },
  "actionButtons": {
    "newQuery": {
      "label": "New Query ",
      "isVisible": true,
      "toolTip": "New Query"
    },
    "exportChat": {
      "isVisible": true,
      "toolTip": "Export Chat",
      "message": "Chat Successfully Exported"
    },
    "filterReset": {
      "label": "Reset Filters",
      "toolTip": "Reset Filters"
    },
    "like": {
      "isVisible": true,
      "toolTip": "Like"
    },
    "dislike": {
      "isVisible": true,
      "toolTip": "Dislike"
    },
    "copyToClipboard": {
      "isVisible": true,
      "toolTip": "Copy To Clipboard"
    },
    "showReferences": {
      "label": "Show References",
      "toolTip": "Show References"
    },
    "downloadAllReferences": {
      "label": "Download All References",
      "toolTip": "Download All References"
    },
    "searchViaWeb": {
      "label": "Search via Web",
      "warningMessage": "All the selected content will be removed once you select \"Search via Web\". Are you sure you want to choose this?",
      "toolTip": "Search via Web"
    },
    "deleteAll": {
      "label": "Delete All",
      "showWarning": true,
      "warningMessage": "Are you sure you want to delete all documents",
      "toolTip": "Delete All"
    },
    "querySubmitButton": {
      "toolTip": "Submit"
    }
  },
  "actionHandlers": [
    {
      "key": "AH1",
      "queryType": "q&a",
      "title": "Browse Action"
    }
  ],
  "apiGroupForActionHandlerApi": "LEVEL1",
  "atleastOneDocumentSelectMessage": "You can not unselect all documents.",
  "atleastOneSourceSelectedMessage": "You cannot de-select all the Sources",
  "blankQueryErrorText": "<div class='gai_error_msg gai_blank_query_msg'><div class='gai_error_msg_head'>Input your query now!</div><p>Welcome! Get summarized answers by typing your query on the search box on the top.</p></div>",
  "boxDisclaimer": "These are directional insights. To validate the information and get any more details you can <b>Ask the Analyst</b> or look at references and available information on Insightsfirst",
  "bulletCountReadMoreLimit": 3,
  "businessUnit": "PS",
  "chatHistory": [],
  "clientId": 1,
  "componentHeadingName": "Powered by Generative AI",
  "componentTitle": "Research Bot",
  "componentUserName": "Research Bot",
  "defaultCustomResponse": "",
  "defaultQueryTypeForAH": "q&a",
  "deleteAll": "Delete All",
  "deleteAllButton": {
    "displayName": "Delete All",
    "showWarning": true
  },
  "disclaimer": "You can ask me any question about the domain specific data",
  "documentNotificationMessage": "",
  "DocumentViewerSlidingWindowWidth": "70%",
  "downloadReferenceIcon": "<div class='gai_references_icons_wrap'><div class='gai_references_download_icon'></div></div>",
  "errorMessage": "Sorry something went wrong on backend services please try again later.",
  "exportChatColumns": [
    {
      "value": "queryTime",
      "label": "Query Time",
      "sequence": 1
    },
    {
      "value": "userName",
      "label": "User Name",
      "sequence": 2
    },
    {
      "value": "query",
      "label": "Query",
      "sequence": 3
    },
    {
      "value": "answer",
      "label": "Answer",
      "sequence": 4
    },
    {
      "value": "queryType",
      "label": "Query Type",
      "sequence": 5
    },
    {
      "value": "sourceType",
      "label": "Source Type",
      "sequence": 6
    },
    {
      "value": "contentTypes",
      "label": "Content Types",
      "sequence": 7
    },
    {
      "value": "appliedFilters",
      "label": "Applied Filters",
      "sequence": 8
    },
    {
      "value": "feedbackStatus",
      "label": "Feedback Status",
      "sequence": 9
    },
    {
      "value": "prompts",
      "label": "Prompts",
      "sequence": 10
    },
    {
      "value": "selectedDocuments",
      "label": "Selected Documents",
      "sequence": 11
    }
  ],
  "features": [
    {
      "label": "Q&A",
      "value": "q&a",
      "isVisible": true
    },
    {
      "label": "Key Takeaway",
      "value": "key_takeaways",
      "isVisible": true
    },
    {
      "label": "Ask the Analyst",
      "value": "ask_the_analyst",
      "isVisible": true
    }
  ],
  "filters": [
    {
      "field": "libraryname",
      "label": "Library",
      "sequence": 1
    },
    {
      "field": "geography",
      "label": "Geography",
      "sequence": 2
    },
    {
      "field": "contentarea",
      "label": "Content Area",
      "sequence": 3
    }
  ],
  "gaiActionHandlerApiUrl": "api/v1/bot/action-handler-query",
  "gaiAPIBaseUrl": "https://airagatewayapps.evalueserve.com/gaibotdev/1.0.0/",
  "gaiAuthToken": "eyJ4NXQiOiJaRFV6WXpFd05qTTJZbUZoTVdGalpEWXpZekkyTVRneU1EUXpZelpoTVRBeFlqVTFNakJoTmc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFkbWluIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJEZWZhdWx0QXBwbGljYXRpb24iLCJpZCI6MSwidXVpZCI6IjAxZDFiNDk5LTJkNjQtNDY2NC1hMTI4LTY4NzgyZjEyYmM3MiJ9LCJpc3MiOiJodHRwczpcL1wvYWlyYWdhdGV3YXlhcHBzLmV2YWx1ZXNlcnZlLmNvbTo5NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsiQnJvbnplIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9LCJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJUkFBUEkiLCJjb250ZXh0IjoiXC9BSVJBXC92MSIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IkJyb256ZSJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJkZW1vIiwiY29udGV4dCI6IlwvdXNlclwvMDEiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIwMSIsInN1YnNjcmlwdGlvblRpZXIiOiJCcm9uemUifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiREFJIiwiY29udGV4dCI6IlwvVGVzdCIsInB1Ymxpc2hlciI6IkFETUlOIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IkJyb256ZSJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJTVU1NQVJZQVBJIiwiY29udGV4dCI6Ilwvc3VtbWFyeW1zXC92MSIsInB1Ymxpc2hlciI6IkVWQUxVRVNFUlZFLkNPTVwvZGVlcC5rYW5kcGFsIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IkJyb256ZSJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJEY2lwaGVyQVBJIiwiY29udGV4dCI6IlwvZGNpcGhlclwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJCcm9uemUifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiSG9tZUFQSSIsImNvbnRleHQiOiJcL2hvbWVhcGlcL3YxIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiQnJvbnplIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlBhdGVudEFQSSIsImNvbnRleHQiOiJcL3BhdGVudG1zXC92MSIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IkJyb256ZSJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJUUkFOU0xBVElPTkFQSSIsImNvbnRleHQiOiJcL3RyYW5zbGF0aW9ubXNcL3YxIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJUkEtQVVUT01MIiwiY29udGV4dCI6IlwvYXV0b21sbXNcL3YxIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRGaXJzdEFQSXMtMSIsImNvbnRleHQiOiJcL0lGbXNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRGaXJzdC1QUyIsImNvbnRleHQiOiJcL2lmcHNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRGaXJzdC1CUiIsImNvbnRleHQiOiJcL2lmYnJcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkhvbWVBUEktUHJvZCIsImNvbnRleHQiOiJcL2hvbWVtc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU1VNTUFSWUFQSS1QUk9EIiwiY29udGV4dCI6Ilwvc3VtbWFyeW1zYXBwc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiUGF0ZW50QVBJLVBST0QiLCJjb250ZXh0IjoiXC9wYXRlbnRtc2FwcHNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJUkFBVVRPTUwtUFJPRCIsImNvbnRleHQiOiJcL2F1dG9tbG1zYXBwc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiSW5zaWdodHNGaXJzdFBTQVBJcy1QUy1EZXYiLCJjb250ZXh0IjoiXC9pZnBzX2RldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiSW5zaWdodHNGaXJzdEZTQVBJcy1EZXYiLCJjb250ZXh0IjoiXC9pZmZzZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJUUkFOU0xBVElPTkFQSS1QUk9EIiwiY29udGV4dCI6IlwvdHJhbnNtc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQU5FUkFQSXMtREVWIiwiY29udGV4dCI6IlwvbmVyXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJTZW50aW1lbnRBbmFseXNpc0FQSXMiLCJjb250ZXh0IjoiXC9zZW50aW1lbnRhcGlcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRzRmlyc3QtQlJNUy1VQVQiLCJjb250ZXh0IjoiXC9pZmJybXNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRzRmlyc3QtQlJVQVQtVUFUIiwiY29udGV4dCI6IlwvaWZicnVhdFwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiSW5zaWdodHNGaXJzdC1CUkRFVi1VQVQiLCJjb250ZXh0IjoiXC9pZmJyZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJQaHJhc2VDbG91ZEtleXdvcmRzQVBJIiwiY29udGV4dCI6IlwvcGhyYXNlY2xvdWRcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJUkFSYWJiaXRBUEkiLCJjb250ZXh0IjoiXC9yYWJiaXRtc2RldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQVJhYmJpdEFQSS1Qcm9kIiwiY29udGV4dCI6IlwvcmFiYml0bXNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRzRmlyc3RGU0FQSXMtUHJvZCIsImNvbnRleHQiOiJcL2lmZnNwcm9kXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBTmV3c0NsYXNzaWZpY2F0aW9uQVBJcyIsImNvbnRleHQiOiJcL25ld3NjbGFzc2RldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQ3VzdG9tTUxBUElzIiwiY29udGV4dCI6IlwvY3VzdG9tbWxkZXZcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ik1jS2luc2V5QXV0b1RhZ2dpbmciLCJjb250ZXh0IjoiXC9tY2thdXRvdGFnZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJEZXNpZ25Xb3JrZmxvdyIsImNvbnRleHQiOiJcL3dvcmtmbG93ZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJJbnNpZ2h0c0ZpcnN0UFNRQS1VQVQiLCJjb250ZXh0IjoiXC9pZnBzcWFcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Ikluc2lnaHRzRmlyc3RQU1VBVC1VQVQiLCJjb250ZXh0IjoiXC9pZnBzdWF0XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBRVNHQVBJcyIsImNvbnRleHQiOiJcL2VzZ2RldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQVN0cnVjdFN1bW1hcnlBUElzIiwiY29udGV4dCI6IlwvZG9jc3VtbWFyeWRldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQVRveGljb2xvZ3lBbmFseXNpc0FQSXMiLCJjb250ZXh0IjoiXC90b3hpY29sb2d5ZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBTmV3c1N1bW1hcnlBUElzIiwiY29udGV4dCI6IlwvbmV3c3N1bW1hcnlkZXZcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJU2VhcmNoQVBJcyIsImNvbnRleHQiOiJcL2Fpc2VhcmNoZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJDdXN0b21NTEFQSXMtUHJvZCIsImNvbnRleHQiOiJcL2N1c3RvbW1sXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBTkVSQVBJcy1Qcm9kIiwiY29udGV4dCI6IlwvbmVybXNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlNlbnRpbWVudEFuYWx5c2lzQVBJcy1Qcm9kIiwiY29udGV4dCI6Ilwvc2VudGltZW50bXNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkdBSUJvdEFQSXMiLCJjb250ZXh0IjoiXC9nYWlib3RkZXZcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlRhYnNPbk5ld3NBUElzIiwiY29udGV4dCI6IlwvdGFic29ubmV3c2RldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiUGhyYXNlQ2xvdWRLZXl3b3Jkc0FQSS1Qcm9kIiwiY29udGV4dCI6IlwvcGhyYXNlY2xvdWRtc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQUVTR0FQSXMtUHJvZCIsImNvbnRleHQiOiJcL2VzZ21zXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBTmV3c0NsYXNzQVBJcy1Qcm9kIiwiY29udGV4dCI6IlwvbmV3c2NsYXNzbXNcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJUkFUb3hpY29sb2d5QVBJcy1Qcm9kIiwiY29udGV4dCI6IlwvdG94aWNvbG9neW1zXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBU3RydWN0U3VtbWFyeUFQSXMtUHJvZCIsImNvbnRleHQiOiJcL2RvY3N1bW1hcnltc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQU5FV1NTdW1tYXJ5QVBJcy1Qcm9kIiwiY29udGV4dCI6IlwvbmV3c3N1bW1hcnltc1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiTWNLaW5zZXlBdXRvVGFnZ2luZy1Qcm9kIiwiY29udGV4dCI6IlwvbWNrYXV0b3RhZ21zXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJUcmVuZENsb3VkQVBJcy1EZXYiLCJjb250ZXh0IjoiXC90cmVuZGNsb3VkbXNkZXZcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkFJUkFFdmVudERldGVjdGlvbkFQSXMiLCJjb250ZXh0IjoiXC9ldmVudGRldGVjdGlvbmRldlwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQVJlZGFjdGlvbkFQSXMtRGV2IiwiY29udGV4dCI6IlwvcmVkYWN0aW9uZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBRVRMQVBJcy1EZXYiLCJjb250ZXh0IjoiXC9ldGxkZXZcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlBhcmFtRXh0cmFjdGlvbkFQSXMtRGV2IiwiY29udGV4dCI6IlwvcGFyYW1leHRyYWN0aW9uZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVNlYXJjaEFQSXMtUHJvZCIsImNvbnRleHQiOiJcL2Fpc2VhcmNoXC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJBSVJBR1BUQ2xhc3NpZmljYXRpb25BUElzLURldiIsImNvbnRleHQiOiJcL2dwdGNsYXNzaWZpY2F0aW9uZGV2XC8xLjAuMCIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJHQUlCb3RBUElzLVVBVCIsImNvbnRleHQiOiJcL2dhaWJvdHVhdFwvMS4wLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQUlSQUF1ZGlvQW5hbHlzaXNBUElzLURldiIsImNvbnRleHQiOiJcL2F1ZGlvYW5hbHlzaXNkZXZcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJpYXQiOjE3MDg3NjE5MTQsImp0aSI6IjczYjI0ZTI5LTA0NjMtNDc1Ny1iYWExLTQ3NWMzZjMyOWMwOSJ9.Yd5BZRV9tP6iEXxCMR_jMJXPJXkbeLOVySikhXBareSvXpTv2rtI5ukubaILL0RZRHdh8CYaMPyJ-AWX1KP8lnuwlEnLK2pBQ2P1FW6TbXtdqzp1l2gMqIf0cPZufLAUkm0L53EIgwej8qGncRP1Bj7WRHPCks-ekI8t58f4OYlOk5FYZwQKZqSdtrJlxojV798oSdSdskHQ_lTpegPb1dwvAPltqM4IBWLQTOqnAcrVjaPBy25sEed8a4lsTBwVmTKpro8mil8vdsvy5ShJIMYl7fvt5j3CldEJ3JWVtxiIOJpNRdzJ4rXVh2sPIMYcabASS_cb1e8Iu08NiUQ6ww==",
  "gaiCaptureFeedbackApiUrl": "api/v1/bot/update-feedback",
  "gaiGetDownloadRefrenceFile": "api/v1/bot/download-result/",
  "gaiGetModelFilterApiUrl": "api/v1/bot/get-model-filters",
  "gaiIntegrationToken": "b662d23e0441767b5d87cc39ff3a8233577e66b5",
  "gaiRunPredictionApiUrl": "api/v1/bot/run-query",
  "headerTabs": [
    {
      "label": "Curated",
      "value": 1,
      "isVisible": false,
      "isEnable": false
    },
    {
      "label": "Semi-Curated",
      "value": 2,
      "isVisible": false,
      "isEnable": false
    },
    {
      "label": "Web",
      "value": 3,
      "isVisible": false,
      "isEnable": false
    }
  ],
  "inputQueryBoxCharacterLimit": 240,
  "inputTypeQuery": "Ask your question here...",
  "isContextClearOnQueryTypeChange": true,
  "isContextClearOnSourceChange": true,
  "isFilterCascadingEnabled": true,
  "isFilterDataSourceFromAira": false,
  "isGaiUaTrackingEnable": true,
  "isNewQueryButtonVisible": false,
  "isProductTrackingEnable": true,
  "isPromptsVisible": true,
  "isStreamingApplicableOnKeyTakeAway": false,
  "isStreamingApplicableOnQnA": false,
  "isTabViewShow": false,
  "loaderImage": {
    "defaultView": "<div class='loader_div'><div class='bot-name'></div><div class='gai_chatbot_answer_loader'><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_even'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_even'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_even'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span></div></div>",
    "tabView": "<div class='gai_tabview_loader'><div class='gai_tab_first_loader'> <div class='gai_small_loader'></div>Generating</div><div class='skeleton_loader'><div class='skeleton'></div><div class='skeleton'></div><div class='skeleton'></div><div class='skeleton width60'></div></div></div>"
  },
  "loaderReference": "<div class='loader_div reference_loader'><div class='gai_chatbot_answer_loader'><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_even'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_even'></span><span class='gai_chatbot_answer_loader_bar gai_chatbot_answer_loader_bar_odd'></span></div><p>Loading references...</p></div>",
  "loadingMessage": "It may take a few more seconds for response to be generated. Appreciate your patience while the response is being generated.",
  "permissionModel": {
    "applyPermission": false,
    "locator_type_permissions": [
      {
        "locator_type": "NEWS",
        "permission_tags": [
          {
            "CompName": [
              "AT&T"
            ],
            "BUSINESS_AREA": [
              "All Business Area"
            ]
          }
        ]
      },
      {
        "locator_type": "DOC",
        "permission_tags": [
          {
            "CompName": [
              "AT&T"
            ],
            "BUSINESS_AREA": [
              "All Business Area"
            ]
          }
        ]
      }
    ]
  },
  "PreviewDocumentInSlidingWindow": "1",
  "PreviewDocumentNoRecordFound": "No record found",
  "previewReferenceIcon": "<div class='gai_references_icons_wrap'><div class='gai_references_preview_icon'></div></div>",
  "projectId": 7,
  "queryTypes": [
    {
      "label": "Q&A",
      "value": "q&a",
      "isVisible": true,
      "isMultiHopEnabled": true
    },
    {
      "label": "Key Takeaway",
      "value": "key_takeaways",
      "isVisible": true,
      "isMultiHopEnabled": true
    }
  ],
  "responsesToShowSearchViaWeb": [
    "No relevant information available.",
    "I'm sorry, but your query is not clear and doesn't seem to be related to the provided references. Could you please provide more context or clarify your question?",
    "I'm sorry, but there's no relevant information available to generate an answer for your query.",
    "I'm sorry, but your question is unclear. Could you please provide more details or context?",
    "I'm sorry, but your question seems to be unclear. Could you please provide more details or rephrase it?"
  ],
  "responseTimeThreshold": 5,
  "selectedContentName": "Selected Content",
  "selectedDocuments": "Selected Documents",
  "selectedDocumentsLabelDisplayName": "Selected Documents",
  "sessionDividerText": "Session",
  "showInputboxCharacterLimit": true,
  "showRefferencesInsideBot": true,
  "sourceList": [
    {
      "label": "Platform Data",
      "locatorType": "",
      "sourceType": "DOMAIN",
      "isDefaultSelected": true,
      "toolTip": "Platform Data",
      "sequence": 1,
      "isMultiHopEnabled": true,
      "isVisibleShowReferences": true,
      "isVisibleDownloadAllReferences": true,
      "contentTypes": [
        {
          "label": "Document",
          "locatorType": "DOC",
          "toolTip": "Document",
          "filters": [
            {
              "field": "intelligence",
              "label": "INTELLIGENCE",
              "sequence": 1
            },
            {
              "field": "theme",
              "label": "THEME",
              "sequence": 2
            },
            {
              "field": "geography",
              "label": "GEOGRAPHY",
              "sequence": 3
            }
          ],
          "isFilterCascadingEnabled": false,
          "referenceActionButtons": {
            "preview": {
              "isVisible": true,
              "toolTip": "Preview Document"
            },
            "download": {
              "isVisible": true,
              "toolTip": "Download Document"
            },
            "navigationUrl": {
              "isVisible": true,
              "toolTip": "Download Document"
            }
          },
          "fieldsToshowInReference": [
            {
              "fieldName": "DocumentName",
              "displayName": "DocumentName",
              "sequence": 1,
              "value": "",
              "isApplicableToShow": true,
              "isApplicableToDownload": true,
              "isHyperlink": false
            },
            {
              "fieldName": "",
              "displayName": "link",
              "sequence": 1,
              "value": "https://www.w3schools.com",
              "isApplicableToDownload": true,
              "isApplicableToShow": true,
              "isHyperlink": true
            }
          ],
          "showRelevancyScore": true,
          "downloadRelevancyScore": true,
          "sequence": 1,
          "isDefault": false,
          "isVisible": true
        },
        {
          "label": "News",
          "locatorType": "NEWS",
          "toolTip": "News",
          "filters": [
            {
              "field": "libraryname",
              "label": "Library",
              "sequence": 1
            },
            {
              "field": "geography",
              "label": "Geography",
              "sequence": 2
            },
            {
              "field": "contentarea",
              "label": "Content Area",
              "sequence": 3
            }
          ],
          "isFilterCascadingEnabled": false,
          "referenceActionButtons": {
            "preview": {
              "isVisible": true,
              "toolTip": "Preview NEWS"
            },
            "download": {
              "isVisible": true,
              "toolTip": "Download NEWS"
            },
            "navigationUrl": {
              "isVisible": true,
              "toolTip": "Download Document"
            }
          },
          "fieldsToshowInReference": [
            {
              "fieldName": "sourceurl",
              "displayName": "Source URL",
              "sequence": 1,
              "value": "",
              "isApplicableToShow": true,
              "isApplicableToDownload": true,
              "isHyperlink": false
            },
            {
              "fieldName": "title",
              "displayName": "Title",
              "sequence": 2,
              "value": "",
              "isApplicableToShow": true,
              "isApplicableToDownload": true,
              "isHyperlink": false
            },
            {
              "fieldName": "summary",
              "displayName": "Summary",
              "sequence": 3,
              "value": "",
              "isApplicableToShow": true,
              "isApplicableToDownload": true,
              "isHyperlink": false
            },
            {
              "fieldName": "",
              "displayName": "link",
              "sequence": 1,
              "value": "https://www.w3schools.com",
              "isApplicableToDownload": true,
              "isApplicableToShow": true,
              "isHyperlink": true
            }
          ],
          "showRelevancyScore": true,
          "downloadRelevancyScore": true,
          "sequence": 2,
          "isDefault": false,
          "isVisible": true
        }
      ]
    },
    {
      "label": "Web",
      "locatorType": "",
      "sourceType": "WEB",
      "isDefaultSelected": false,
      "toolTip": "WEB",
      "sequence": 2,
      "isMultiHopEnabled": true,
      "isVisibleShowReferences": true,
      "isVisibleDownloadAllReferences": true,
      "contentTypes": []
    }
  ],
  "submitRequestMessage": "We have submitted your request and will share the deliverable on your official email ID.",
  "userName": "userName",
  "wordCountReadMoreLimit": 100
}
  get code() {
    return JSON.stringify(this.data, null, 2);
  }

  set code(v) {
    debugger
    try {
      this.data = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }
}
