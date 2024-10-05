# Product Requirements Document (PRD) for ZenTube

## Project Overview

We are developing a modern, simple, and responsive web application that allows users to save their YouTube playlists and automatically generates individual summaries for each video in the playlist. Additionally, the app provides a Daily Briefing containing summaries of all new videos from the previous day and a personalized Daily Podcast based on these summaries.

### Tech Stack:

- **Frontend**: Next.js 14, shadcn UI components, Tailwind CSS, Lucide Icons
- **Backend**: Supabase (PostgreSQL database, Authentication, Storage)
- **Authentication**: Clerk
- **Payments**: Stripe
- **APIs and Services**: Google Gemini for summarization, [Select a TTS service] for podcast generation

### Design Principles (Dieter Rams):

- **Simplicity**: Keep the interface clean and intuitive.
- **Functionality**: Focus on essential features that add value.
- **Aesthetics**: Use a minimalist design with consistent styling.
- **Understandability**: Make the app easy to navigate and use.
- **Unobtrusiveness**: Design should support the content, not distract from it.

## Table of Contents

1. User Roles & Permissions
2. Functional Requirements
   - 1. User Authentication & Profile Management
   - 2. Playlist Management
   - 3. Video Summarization
   - 4. Daily Briefing
   - 5. Daily Podcast
   - 6. Payment & Subscription
3. Non-Functional Requirements
4. User Flows
5. Screens & Wireframes
6. Data Models
7. API Endpoints
8. Error Handling & Validation
9. Security Considerations
10. Deployment & Maintenance

## User Roles & Permissions

- **Guest User**:
  - Can view marketing pages.
  - Can sign up or log in.
- **Registered User**:
  - Access to all functionalities based on subscription level.
  - Manage playlists, view summaries, access daily briefings and podcasts.
- **Admin (Optional for future scope)**:
  - Manage users, monitor system performance, handle content moderation.

## Functional Requirements

### 1. User Authentication & Profile Management

#### 1.1 Sign-Up & Login

- **Options**:
  - Sign up/login with Google account via OAuth.
  - Sign up/login with email and password.
- **Requirements**:
  - Use Clerk for authentication services.
  - Secure password storage and handling.
  - Email verification for new accounts.

#### 1.2 Profile Management

- **Features**:
  - View and edit profile information (name, email).
  - Change password.
  - Manage notification preferences.

#### 1.3 Password Recovery

- **Features**:
  - Reset password via email link.
  - Security questions or two-factor authentication (optional).

### 2. Playlist Management

#### 2.1 Add Playlist

- **Features**:
  - Input field to enter YouTube playlist URL.
  - Validate the URL and check for accessibility.
  - Store playlist information in Supabase.

#### 2.2 Monitor Playlist

- **Functionality**:
  - Automatically check for new videos every hour.
  - Option for users to manually refresh the playlist.

#### 2.3 View & Manage Playlists

- **Features**:
  - List of all added playlists with thumbnails and titles.
  - Option to remove a playlist.
  - Display the number of videos and last updated time.

### 3. Video Summarization

#### 3.1 Automatic Summarization

- **Process**:
  - Upon detecting a new video, use Google Gemini to generate a summary.
  - Check Supabase to avoid duplicate summaries.
  - Store summary along with video metadata.

#### 3.2 View Summaries

- **Features**:
  - List of summarized videos with titles, thumbnails, and summary snippets.
  - Search and filter options (by date, playlist, keywords).

#### 3.3 Summary Details

- **Content**:
  - Full summary text.
  - Video metadata (title, duration, upload date).
  - Link to the original YouTube video.

### 4. Daily Briefing

#### 4.1 Automatic Generation

- **Schedule**:
  - Generate daily at a specified time (e.g., 6 AM local time).
- **Content**:
  - Aggregate summaries of all new videos from the past 24 hours.
  - Organize content by playlist or topic.

#### 4.2 View Daily Briefings

- **Features**:
  - List of daily briefings by date.
  - Access to past briefings.
  - Option to mark as read or favorite.

### 5. Daily Podcast

#### 5.1 Podcast Generation

- **Process**:
  - Convert daily briefing summaries into audio using [Select a TTS service].
  - Ensure podcast length does not exceed 30 minutes.
  - Store podcast files securely.

#### 5.2 Access & Playback

- **Features**:
  - In-app audio player with play, pause, seek controls.
  - Option to download the podcast.
  - Display podcast duration and playback progress.

### 6. Payment & Subscription

#### 6.1 Subscription Plans

- **Plans**:
  - **Free Tier**:
    - Limited number of playlists (e.g., 1 playlist).
    - Access to video summaries only.
  - **Premium Tier**:
    - Unlimited playlists.
    - Access to daily briefings and podcasts.
    - Priority processing.

#### 6.2 Payment Integration

- **Features**:
  - Use Stripe for handling payments.
  - Secure payment processing with PCI compliance.
  - Support for major credit cards and payment methods.

#### 6.3 Account Management

- **Features**:
  - Upgrade or downgrade subscription.
  - View billing history and invoices.
  - Update payment methods.
  - Cancel subscription.

#### 6.4 Trial Period (Optional)

- **Features**:
  - Offer a 7-day free trial for the premium tier.
  - Require payment details to start the trial.

## Non-Functional Requirements

- **Performance**:
  - Page load times under 2 seconds.
  - Efficient processing of summaries and podcasts.
- **Scalability**:
  - Handle increasing numbers of users and data.
- **Security**:
  - Protect user data and privacy.
  - Secure API integrations.
- **Usability**:
  - Intuitive navigation and user-friendly interface.
- **Accessibility**:
  - Comply with WCAG 2.1 AA standards.

## User Flows

### Flow 1: User Sign-Up and Onboarding

1. User lands on the homepage.
2. Clicks on “Sign Up.”
3. Chooses to sign up with Google or email.
4. Completes authentication.
5. Completes a brief onboarding tutorial (optional).
6. Redirected to the dashboard.

### Flow 2: Adding a YouTube Playlist

1. User navigates to “My Playlists.”
2. Clicks on “Add Playlist.”
3. Enters the YouTube playlist URL.
4. Clicks “Submit.”
5. Receives confirmation that the playlist has been added.
6. The app begins monitoring the playlist.

### Flow 3: Viewing Video Summaries

1. User selects a playlist from “My Playlists.”
2. Sees a list of videos with available summaries.
3. Clicks on a video to view the full summary.
4. Has the option to visit the original video on YouTube.

### Flow 4: Accessing Daily Briefing and Podcast

1. User navigates to “Daily Briefings.”
2. Selects the desired date.
3. Reads the briefing or clicks on “Play Podcast.”
4. Uses the in-app player to listen to the podcast.
5. Optionally downloads the podcast.

### Flow 5: Upgrading Subscription

1. User goes to “Account Settings.”
2. Clicks on “Upgrade to Premium.”
3. Views subscription plans.
4. Selects the premium plan.
5. Completes payment via Stripe checkout.
6. Receives confirmation and access to premium features.

## Screens & Wireframes

### 1. Authentication Screens

#### 1.1 Sign-Up Screen

- **Components**:
  - App logo and tagline.
  - “Sign up with Google” button.
  - Divider with “or.”
  - Email and password input fields.
  - “Sign Up” button.
  - Link to “Login” if the user already has an account.

#### 1.2 Login Screen

- **Components**:
  - Email and password input fields.
  - “Login” button.
  - “Forgot Password?” link.
  - Link to “Sign Up” if the user doesn’t have an account.

### 2. Dashboard

- **Components**:
  - Navigation menu (Playlists, Summaries, Daily Briefings, Account).
  - Overview section with quick stats (e.g., number of playlists, new summaries).
  - Notifications panel (optional).

### 3. My Playlists Screen

- **Components**:
  - “Add Playlist” button.
  - List of playlists with thumbnails and names.
  - Actions for each playlist (View, Remove).

### 4. Video Summaries Screen

- **Components**:
  - Search bar.
  - Filter options (by date, playlist).
  - List of videos with thumbnails, titles, and summary snippets.
  - Pagination or infinite scroll.

### 5. Summary Details Screen

- **Components**:
  - Video thumbnail and title.
  - Summary text.
  - Metadata (duration, upload date).
  - “Watch on YouTube” button.

### 6. Daily Briefings Screen

- **Components**:
  - Calendar or list view of briefings by date.
  - Briefing summaries.
  - Actions (Read, Play Podcast).

### 7. Podcast Player Screen

- **Components**:
  - Audio playback controls (play/pause, seek, volume).
  - Progress bar.
  - Download button.

### 8. Account Settings Screen

- **Components**:
  - Profile information (name, email).
  - Subscription details.
  - Payment methods.
  - Notification preferences.
  - “Upgrade/Downgrade Subscription” button.

### 9. Pricing Page

- **Components**:
  - Comparison table of Free vs. Premium features.
  - Pricing details.
  - “Upgrade Now” button.

## Data Models

### User

- `user_id` (UUID)
- `name` (string)
- `email` (string)
- `password_hash` (string, managed by Clerk)
- `subscription_level` (enum: Free, Premium)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Playlist

- `playlist_id` (UUID)
- `user_id` (UUID, foreign key)
- `youtube_playlist_url` (string)
- `title` (string)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Video

- `video_id` (UUID)
- `playlist_id` (UUID, foreign key)
- `youtube_video_id` (string)
- `title` (string)
- `thumbnail_url` (string)
- `duration` (string)
- `upload_date` (date)
- `created_at` (timestamp)

### Summary

- `summary_id` (UUID)
- `video_id` (UUID, foreign key)
- `summary_text` (text)
- `created_at` (timestamp)

### DailyBriefing

- `briefing_id` (UUID)
- `user_id` (UUID, foreign key)
- `date` (date)
- `content` (text)
- `created_at` (timestamp)

### Podcast

- `podcast_id` (UUID)
- `briefing_id` (UUID, foreign key)
- `audio_file_url` (string)
- `duration` (string)
- `created_at` (timestamp)

### Payment

- `payment_id` (UUID)
- `user_id` (UUID, foreign key)
- `stripe_customer_id` (string)
- `subscription_status` (string)
- `created_at` (timestamp)
- `updated_at` (timestamp)

## API Endpoints

### Authentication (Handled by Clerk)

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Playlists

- `POST /api/playlists` - Add a new playlist
- `GET /api/playlists` - Get all playlists for a user
- `DELETE /api/playlists/{playlist_id}` - Remove a playlist

### Summaries

- `GET /api/summaries` - Get summaries
- `GET /api/summaries/{summary_id}` - Get a specific summary

### Daily Briefing

- `GET /api/briefings` - Get daily briefings
- `GET /api/briefings/{briefing_id}` - Get a specific briefing

### Podcast

- `GET /api/podcasts` - Get podcasts
- `GET /api/podcasts/{podcast_id}` - Get a specific podcast

### Payments

- `POST /api/payments/subscribe` - Create or update a subscription
- `GET /api/payments/invoices` - Get billing history

## Error Handling & Validation

- **User Input Validation**:
  - Validate email format and password strength during sign-up.
  - Ensure YouTube playlist URLs are valid and accessible.
- **API Errors**:
  - Return standardized error responses with appropriate HTTP status codes.
- **Graceful Degradation**:
  - Inform users of errors without exposing technical details.
  - Provide helpful messages and guidance for resolution.

## Security Considerations

- **Authentication & Authorization**:
  - Use secure tokens and sessions managed by Clerk.
- **Data Protection**:
  - Encrypt sensitive data in transit (HTTPS) and at rest.
- **API Security**:
  - Implement rate limiting and input sanitization.
- **Payment Security**:
  - Use Stripe’s secure checkout to handle payment information.
  - Comply with PCI DSS standards.

## Deployment & Maintenance

### Deployment

- **Hosting Platform**: Deploy frontend and backend on a platform like Vercel or Netlify.
- **Database Hosting**: Use Supabase for database and storage needs.
- **CI/CD Pipeline**: Set up automated testing and deployment workflows.

### Monitoring & Logging

- **Error Tracking**: Implement tools like Sentry for error monitoring.
- **Performance Monitoring**: Use analytics to monitor app performance and usage patterns.
- **Logging**: Maintain logs for API requests, errors, and user activities (in compliance with privacy laws).

### Maintenance

- **Regular Updates**: Keep dependencies up to date to patch security vulnerabilities.
- **User Support**: Provide a support channel (email or chat) for users to report issues.
- **Backup & Recovery**: Implement regular backups of the database and storage.

## Appendix

### Third-Party Services
- **Youtube API**: To fetch the videos from the user's youtube channel
- **Google Gemini API**: For video summarization. 
- **Text-to-Speech Service**: Select a suitable TTS provider (e.g., Google Cloud TTS, Amazon Polly).
- **Clerk**: For authentication and user management.
- **Stripe**: For handling payments and subscriptions.
- **Supabase**: As the backend database and storage solution.

### Future Enhancements

- **Multi-Language Support**: Allow summaries and podcasts in multiple languages.
- **Mobile Application**: Develop native apps for iOS and Android.
- **Social Sharing**: Enable users to share summaries or briefings on social media.
- **Collaborative Playlists**: Allow users to share playlists with each other within the app.

By adhering to this PRD, the development team should have a clear understanding of the project scope, requirements, and deliverables. The focus remains on simplicity, functionality, and user experience, in line with Dieter Rams’ principles.



# Documentation and Sample Codes to Use




# File Structure
.
├── LICENSE
├── README.md
├── app
│   ├── favicon.ico
│   ├── fonts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── instructions
│   └── instructions.md
├── lib
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json