curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: XXX' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "You are a job interviewer for a software company and you have access to the GitHub profile of your next interviewee: https://github.com/sully-vian. What questions do you ask him ? You need to find out if he just vibecoded his projects or if he knows what its about"
          }
        ]
      }
    ]
  }'
