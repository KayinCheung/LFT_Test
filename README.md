# LFT_Test

A React + Redux front end that displays the websocket stream of symbol/price updates. A second tab allows users to paginate through past 5 mins of updates. User can configure server update frequency, and set price threshold for different cell colors.

## Installation
First run the python server: https://github.com/KayinCheung/LFT_Test_Backend
Ensure the python server is running at `http://127.0.0.1:5000`

- `npm install`
- `npm start`


## App Features

### Real time data page

- Displays websocket stream from server. 500 elements on the same page.
- Set threshold. Prices below threshold will be red, green otherwise.
- Set frequency of server updates and websocket stream. Minimum 100ms.


![lhft1](https://user-images.githubusercontent.com/24837709/67154353-33d22a00-f32d-11e9-8571-c1394fcd9396.png)


### Historical data page

- Accessible from the top right "View Historical Data" button
- Gets past 5 mins of data from server
- Allows user to page through the data, 120 elements per page.
- Informs user the available time range of historical data, time range of current page data, current/total pages
- Set threshold. Prices below threshold will be red, green otherwise.
- Reload button to get latest historical data.

![lhft2](https://user-images.githubusercontent.com/24837709/67154352-33d22a00-f32d-11e9-9c1e-fc5c0860448f.png)
