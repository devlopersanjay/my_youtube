# App description

Make youtube clone app with React, Redux, Tailwind, Live API
Listout Youtube video
Make Search with Live API, Debouncing, and using caching.

# Debouncing :

typing slow = 200ms
typing fast = 30ms

Performance:

- iphone pro max = 14 letter \* 1000 = 14000
- with debouncing = 3 API calls \* 1000 = 3000

Debouncing with 200ms

- if difference between 2 key strokes is <200ms -Decline API call
- 200ms make an API Call

cache:
-time complexcity tro search in array = O(n)
-time complexcity tro search in object = O(1)
