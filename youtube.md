<!DOCTYPE html>
<html>

<head>
  <title>Youtube.com Clone</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap"
    rel="stylesheet">

  <link rel="stylesheet" href="styles/video.css">
  <link rel="stylesheet" href="styles/general.css">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/sidebar.css">
</head>

<body>
  <div class="header">
    <div class="left-section">
      <img class="hamburger-menu" src="icons/hamburger-menu.svg">
      <img class="youtube-logo" src="icons/youtube-logo.svg">
    </div>
    <div class="middle-section">
      <input class="search-bar" type="text" placeholder="Search">
      <button class="search-button">
        <img class="search-icon" src="icons/search.svg">
        <div class="tooltip">Search</div>
      </button>
      <button class="voice-search-button">
        <img class="voice-search-icon" src="icons/voice-search-icon.svg">
        <div class="tooltip">Search with your voice</div>
      </button>
    </div>
    <div class="right-section">
      <div class="upload-icon-container">
        <img class="upload-icon" src="icons/upload.svg">
        <div class="tooltip">Search</div>
      </div>

      <div class="youtube-apps-container">
        <img class="youtube-apps-icon" src="icons/youtube-apps.svg">
        <div class="tooltip">Search</div>
      </div>

      <div class="notifications-icon-container">
        <img class="notifications-icon" src="icons/notifications.svg">
        <div class="tooltip">Notifications</div>
        <div class="notifications-count">3</div>
      </div>
      <img class="current-user-pic" src="channel-pictures/my-channel.jpeg">
    </div>
  </div>

  <div class="sidebar">
    <div class="sidebar-link">
      <img src="icons/home.svg">
      <div>Home</div>
    </div>
    <div class="sidebar-link">
      <img src="icons/explore.svg">
      <div>Explore</div>
    </div>
    <div class="sidebar-link">
      <img src="icons/subscriptions.svg">
      <div>Explore</div>
    </div>
    <div class="sidebar-link">
      <img src="icons/originals.svg">
      <div>Originals</div>
    </div>
    <div class="sidebar-link">
      <img src="icons/youtube-music.svg">
      <div>YouTube Music</div>
    </div>
    <div class="sidebar-link">
      <img src="icons/library.svg">
      <div>Library</div>
    </div>
  </div>

  <div class="video-grid">
    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
          <img class="thumnail" src="thumnails/thumbnail-1.webp">
        </a>
        <div class="video-time">
          14:20
        </div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <div class="channel-pic-wrap">
            <a href="https://www.youtube.com/c/mkbhd">
              <img class="profile-picture" src="channel-pictures/channel-1.jpeg">
            </a>
            <div class="tooltip">
              <img class="tooltip-author-pic" src="channel-pictures/channel-1.jpeg">
              <div class="tooltip-info">
                <div class="channel-name">
                  Marques Brownlee
                </div>
                <div class="subscriber-count">
                  15M subscribers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a class="video-link" href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
              Talking Tech and AI with Google CEO Sundar Pichai!
            </a>
          </p>
          <p class="video-author">
            <a class="channel-link" href="https://www.youtube.com/c/mkbhd">
              Marques Brownlee              
            </a>
          </p>
          <p class="video-stats">
            3.4M views &#183; 6 months ago
          </p>
        </div>
      </div>
    </div>

    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
          <img class="thumnail" src="thumnails/thumbnail-2.webp">
        </a>
        <div class="video-time">
          8:22
        </div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <a href="https://www.youtube.com/c/markiplier">
            <img class="profile-picture" src="channel-pictures/channel-2.jpeg">
          </a>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a class="video-link" href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
              Try Not To Laugh Challenge #9
            </a>
          </p>
          <p class="video-author">
            <a class="channel-link" href="https://www.youtube.com/c/markiplier">
              Markiplier
            </a>
          </p>
          <p class="video-stats">
            19M views &#183; 4 years ago
          </p>
        </div>
      </div>
    </div>

    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
          <img class="thumnail" src="thumnails/thumbnail-3.webp">
        </a>
        <div class="video-time">
          9:13
        </div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <a href="https://www.youtube.com/user/SSSniperWolf">
            <img class="profile-picture" src="channel-pictures/channel-3.jpeg">
          </a>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a class="video-link" href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
              Crazy Tik Toks Taken Moments Before DISASTER
            </a>
          </p>
          <p class="video-author">
            <a class="channel-link" href="https://www.youtube.com/user/SSSniperWolf">
              SSSniperWolf
            </a>
          </p>
          <p class="video-stats">
            12M views &#183; 1 year ago
          </p>
        </div>
      </div>
    </div>

    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
          <img class="thumnail" src="thumnails/thumbnail-4.webp">
        </a>
        <div class="video-time">22:09</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <a href="https://www.youtube.com/c/veritasium">
            <img class="profile-picture" src="channel-pictures/channel-4.jpeg">
          </a>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a class="video-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg">
              The Simplest Math Problem No One Can Solve - Collatz...
            </a>
          </p>
          <p class="video-author">
            <a class="channel-link" href="https://www.youtube.com/c/veritasium">
              Veritasium
            </a>
          </p>
          <p class="video-stats">
            18M views &#183; 4 months ago
          </p>
        </div>
      </div>
    </div>

    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
          <img class="thumnail" src="thumnails/thumbnail-5.webp">
        </a>
        <div class="video-time">11:17</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <a href="https://www.youtube.com/c/CSDojo">
            <img class="profile-picture" src="channel-pictures/channel-5.jpeg">
          </a>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a class="video-link" href="https://www.youtube.com/watch?v=86CQq3pKSUw">
              Kadane's Algorithm to Maximum Sum Subarray...
            </a>
          </p>
          <p class="video-author">
            <a class="channel-link" href="https://www.youtube.com/c/CSDojo">
              CS Dojo
            </a>
          </p>
          <p class="video-stats">
            519K views &#183; 5 years ago
          </p>
        </div>
      </div>
    </div>

    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
          <img class="thumnail" src="thumnails/thumbnail-6.webp">
        </a>
        <div class="video-time">19:59</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <a href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA">
            <img class="profile-picture" src="channel-pictures/channel-6.jpeg">
          </a>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a class="video-link" href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
              Anything You Can Fit In The Circle I’ll Pay For
            </a>
          </p>
          <p class="video-author">
            <a class="channel-link" href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA">
              MrBeast
            </a>
          </p>
          <p class="video-stats">
            141M views &#183; 1 year ago
          </p>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
