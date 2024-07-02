import ReactMarkdown from "react-markdown";
import styles from "../styles/Post.module.css";

export default function GuidelinesPage({}) {
  const communityGuidelines = `
# devCircle Community Guidelines

Welcome to devCircle, a community dedicated to helping students share their side projects, receive constructive feedback, and find inspiration from fellow student developers. To ensure a positive and supportive environment for all members, we ask that you follow these guidelines:

## Be Respectful and Supportive
- Encourage and uplift others: Offer constructive feedback and positive reinforcement.
- Respect differing opinions: Engage in discussions respectfully, even when you disagree.
- Be mindful of your language: Avoid offensive or harmful language.

## Share Meaningful Content
- Post relevant projects: Share your side projects that can inspire and benefit other students.
- Provide detailed explanations: Include clear descriptions, goals, and challenges faced during your project development.
- Stay on topic: Ensure your posts and comments are relevant to student projects and the tech community.

## Give Constructive Feedback
- Be specific and helpful: Offer actionable suggestions and insights to help others improve their projects.
- Be considerate: Frame your feedback in a way that is encouraging and supportive.
- Ask questions: Show interest and seek to understand the projects before providing feedback.

## Protect Privacy and Intellectual Property
- Respect privacy: Do not share personal information or sensitive data without consent.
- Honor intellectual property: Give credit where it is due and avoid plagiarism.

## Foster a Positive Community
- Engage actively: Participate in discussions, comment on projects, and share your own work.
- Report issues: If you encounter inappropriate content or behavior, report it to the devCircle moderators.
- Welcome newcomers: Help new members feel included and supported in the community.

## Follow Platform Rules
- No spam: Avoid posting irrelevant content, advertisements, or repetitive messages.
- Abide by the law: Do not share or promote illegal activities or content.
- Respect platform guidelines: Follow devCircle's terms of service and community rules.

By adhering to these guidelines, we can build a thriving and supportive community where students can grow, learn, and be inspired. Thank you for being a part of devCircle!
`;

  return (
    <div className="box-center">
      <div className={styles.container}>
        <div className="card">
          <div className="post-content">
            <ReactMarkdown>{communityGuidelines}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
