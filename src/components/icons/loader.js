import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
       <g transform="scale(0.6) translate(27, 27)">
        <path
//          d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
          d="M7.523438 5.691406L5.511719 5.769531L5.40625 6.371094C 5.335938 6.707031 5.320312 14.015625 5.335938 22.601562L5.335938 22.601562L5.371094 38.23047L5.828125 39.460938C 6.074219 40.13672 6.476562 41.03125 6.71875 41.460938C 7.71875 43.23047 10.132812 45.29297 12.164062 46.13672C 13.351562 46.628906 16.222656 47.23047 17.359375 47.23047C 18.480469 47.23047 21.121094 46.691406 22.296875 46.23047C 25.898438 44.816406 28.683594 41.67578 29.242188 38.382812C 29.523438 36.73828 29.574219 36.76953 26.425781 36.76953C 23.625 36.76953 23.574219 36.785156 23.398438 37.628906C 23.222656 38.460938 22.417969 39.76953 21.734375 40.339844C 21.367188 40.64453 20.648438 41.078125 20.125 41.32422C 19.265625 41.722656 18.988281 41.76953 17.5 41.76953C 16.082031 41.76953 15.699219 41.70703 14.859375 41.371094C 13.632812 40.86328 12.792969 40.152344 12.144531 39.0625L12.144531 39.0625L11.636719 38.23047L11.585938 24.816406C 11.550781 13.0625 11.566406 11.382812 11.8125 11.183594C 12.039062 10.984375 14.4375 10.953125 32.058594 11C 43.066406 11.046875 52.570312 11.109375 53.19922 11.152344C 56.246094 11.398438 59.183594 12.199219 62.109375 13.570312C 63.76953 14.355469 65.58984 15.492188 66.60547 16.371094C 66.796875 16.554688 67.18359 16.863281 67.48047 17.078125C 69.16016 18.339844 71.97656 22.046875 72.921875 24.214844C 75.40625 30.015625 74.96875 37.246094 71.85547 42.246094C 70.40234 44.554688 68.671875 46.492188 66.41406 48.308594C 64.15625 50.13672 61.214844 51.554688 57.64453 52.539062C 55.683594 53.078125 52.078125 53.539062 49.839844 53.539062C 48.125 53.539062 47.94922 53.507812 47.773438 53.214844C 47.63672 53 47.566406 48.875 47.546875 39.246094C 47.51172 28.152344 47.476562 25.539062 47.285156 25.339844C 47.07422 25.125 45.65625 25.09375 33.109375 25.09375C 24.464844 25.078125 19.058594 25.136719 18.898438 25.230469C 18.691406 25.339844 18.621094 25.847656 18.585938 27.832031C 18.53125 30.246094 18.53125 30.292969 18.917969 30.476562C 19.214844 30.617188 21.875 30.644531 30.101562 30.585938C 36.03125 30.539062 41.054688 30.570312 41.265625 30.628906L41.265625 30.628906L41.648438 30.753906L41.648438 53.23047L41.210938 53.476562C 40.878906 53.67578 40.546875 53.70703 39.847656 53.64453C 38.0625 53.460938 5.738281 53.507812 5.53125 53.691406C 5.234375 53.953125 5.109375 62.628906 5.285156 71L5.285156 71L5.371094 75.30859L6.089844 77.73828C 7.035156 80.875 7.839844 82.53906 8.941406 83.57031C 9.414062 84.015625 9.800781 84.41406 9.800781 84.47656C 9.800781 84.69141 11.515625 86.44531 12.476562 87.19922C 17.972656 91.57031 26.023438 93.03125 33.039062 90.9375C 34.578125 90.47656 37.13672 89.38281 38.5 88.58594C 39.86328 87.80078 43.3125 84.80078 43.92578 83.86328C 44.171875 83.50781 44.695312 82.75391 45.097656 82.19922C 46.42578 80.39844 47.25 78.57031 47.617188 76.53906C 48.003906 74.46094 48.109375 69.21484 47.828125 66.39844C 47.6875 64.96875 47.601562 62.753906 47.63672 61.492188C 47.6875 59.523438 47.722656 59.183594 48.003906 59.015625C 48.210938 58.875 49.296875 58.785156 51.414062 58.722656C 55.476562 58.617188 57.714844 58.19922 61.773438 56.816406C 62.984375 56.398438 65.23828 55.382812 66.01172 54.90625C 66.25391 54.73828 66.515625 54.617188 66.58594 54.617188C 66.796875 54.617188 69.89453 52.507812 71.08594 51.554688C 75.58203 47.921875 78.97656 42.371094 80.18359 36.691406C 81.16406 32.046875 80.41406 26.371094 78.22656 21.9375C 76.52734 18.460938 74.953125 16.382812 71.87109 13.585938C 70.03516 11.921875 68.25 10.691406 65.87109 9.429688C 64.36328 8.644531 63.578125 8.292969 60.98828 7.308594C 59.308594 6.660156 55.703125 5.9375 53.023438 5.691406C 51.1875 5.539062 11.726562 5.539062 7.523438 5.691406zM41.492188 59.109375C 41.73828 59.507812 41.61328 67.921875 41.28125 73.61719C 41.089844 76.81641 41.054688 77.0625 40.566406 78.078125C 40.285156 78.66016 39.98828 79.30859 39.898438 79.49219C 39.621094 80.078125 37.03125 82.50781 35.859375 83.27734C 34.23047 84.33984 33.671875 84.62891 32.19922 85.21484C 31.484375 85.49219 30.609375 85.83203 30.273438 85.96875C 29.765625 86.18359 29.066406 86.23047 26.425781 86.23047C 23.46875 86.23047 23.082031 86.19922 21.960938 85.86328C 19.25 85.046875 18.339844 84.53906 16.273438 82.70703C 15.226562 81.76953 14.050781 80.64453 13.683594 80.21484C 11.863281 78.0625 11.550781 76.29297 11.742188 69.15234C 11.8125 66.86328 11.8125 63.70703 11.761719 62.125C 11.691406 59.90625 11.726562 59.183594 11.898438 59C 12.09375 58.80078 13.773438 58.76953 26.703125 58.76953L26.703125 58.76953L41.28125 58.76953z"

          fill="currentColor"
        />
        </g>
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;