import { ServerConfig, CandidateConfig } from '@jhgaylor/candidate-mcp-server';

const serverConfig = new ServerConfig();

serverConfig.contactEmail = 'jhgaylor@gmail.com';
serverConfig.mailgunApiKey = process.env.MAILGUN_API_KEY;
serverConfig.mailgunDomain = 'mg.jakegaylor.com';

const candidateConfig = new CandidateConfig();
candidateConfig.name = 'Jake Gaylor';
candidateConfig.resumeText = `About me 
•Nearly 15 years of experience working up and down the web stack, from
operations to front end 
•Operated a petabyte scale big data infrastructure on AWS EC2 (Cassandra,
Kafka, Spark via EMR) 
•Big fan of Kubernetes, Gitops, immutable infrastructure, and 12 Factor Apps 
•Developed CI and CD pipelines to empower teams to ship better software,
faster 
•Administered Kubernetes clusters on EKS, GKE, and vSphere (CentOS & CoreOS) 
•Serial Entrepreneur. I've done SaaS, PaaS, a physical product, and run a
restaurant. 
Experience 
STAFF SWE, OFFICE OF THE CEO @ CLOAKED INC — AUGUST 2023-PRESENT 
•Created a program to ingest ideas from all over the company reflecting the
status back to everyone. 
•Worked with executives, product management, and marketing to turn shower
thoughts into 
marketable ideas. 
•Documented the function of all people and ceremonies within the ideation
process to hand off the 
role of researcher to another engineer. 
STAFF PLATFORM ENGINEER @ CLOAKED INC — SEPTEMBER 2022-AUGUST 2023 
•Migrated all the software stacks from various PaaS providers to AWS EKS 
•Used Cloudflare to mask third party usage and give us a layer of control if a
provider goes down. 
•Migrated a single shared AWS account to a spoke and wheel model meeting
compliance obligations 
for SOC2 1 and 2, ISO 27001 and 27701. 
•Established patterns for deploying applications in the Kubernetes cluster as
well as to the edge 
network allowing teams to release new software and maintain compliance. 
OWNER / CO-GM @ THE ONWARD STORE STEAKHOUSE — OCTOBER 2021-JANUARY 2024 
•Managed physical infrastructure including the building, grounds, utilities,
network, a/v 
•Handled Hiring, Firing, HR, Taxes and Legal responsibilities 
•Worked vendors to keep selection fresh and food margins within tolerance 
•Developed processes and trained staff to serve more fresh never frozen food 
Jake Gaylor
FOUNDER, BUSINESS MINDED ENGINEER, SRE ROOTS <3 KUBERNETES 
720.453.3994      jhgaylor@gmail.com    http://jakegaylor.com  Remote First,
Will Travel   
STAFF SWE IN DEVELOPER EXPERIENCE @ INCEPTION HEALTH — JUNE 2020-JUNE 2022 
•Built AWS infrastructure and CDK packages to maintain HIPAA Compliance
obligations while 
allowing teams to deliver software on their own schedule. 
•Trained product teams to work in a serverless environment and maintain grpc
contracts despite 
limitations of AWS infrastructure. 
SENIOR PLATFORM ENGINEER @ CYBERGRX — DECEMBER 2018-JUNE 2020 
•Led vision on the cloud native CI / CD pipelines for AWS and Kubernetes 
•Developed a custom resource using the CoreOS operator SDK for orchestrating
blue/green deploys 
of a "distributed monolith" 
•Mentored software engineers in best practices for building and deploying
software 
SENIOR CLOUD PLATFORM ENGINEER @ CARDFREE — JANUARY 2018-DECEMBER 2018 
•Managed a large scale PCI compliant C# installation in AWS 
•Established best practices for reliably building software and managing
incident response 
SENIOR DEVOPS ENGINEER @ PROTECTWISE, INC — AUGUST 2016-JANUARY 2018 
•SRE for a massive scale data ingestion platform. Thousands of Cassandra
nodes, Petabytes in s3. 
$10M+/yr production AWS environment managed with IaC. 
DEVOPS ENGINEER @ FOOD SERVICE WAREHOUSE — JUNE 2015-MARCH 2016 
•Using CoreOS, fleet, etcd, flannel and some Jenkins built Kubernetes clusters
on vSphere 
SOFTWARE DEVELOPER @ MISSISSIPPI STATE UNIVERSITY — JUNE 2010 – JUNE 2014  
•Created grant proposals to fund the custom software the university needed to
support research 
initiatives such as tracking "human sensors" through natural disasters
including Hurricane Sandy. 
Skills 
Programming Languages: Javascript, Python, Bash, Go, Ruby 
Databases: Neo4j, postgresql, Timestream, MongoDB, Redis, Etcd, Zookeeper,
Cassandra, DynamoDB 
Distributed Systems Glue: Argo Workflows, Kafka, RabbitMQ, AWS IoT 
Automation: Argo CD, Packer, Terraform, Vagrant, Linux, Chef, Gitlab CI,
Jenkins, Github Actions 
Orchestration: Kubernetes, Fleet, Docker 
Monitoring: Prometheus, CloudWatch, Sensu, Pagerduty, Logstash, Kibana,
Grafana, Graphite 

AI Agents & MCP Contributions
• Created a suite of AI agents for "auto change password", "auto login", and "auto change email" leveraging LangChain, Crewai, and a custom homebrew agent framework.
• Active member of the MCP Hosting Working Group, developing strategies for deploying and running MCP servers at scale.
• Contribute to open-source projects including the Dart SDK, an Express tool for binding to MCP servers, various MCP servers (Hirebase, Candidate Job Search, Text Extraction), and a GitOps tool for MCP deployments.
• Run publicly available MCP servers for community testing and experimentation.
• Built a mobile app with a Tinder-like LLM-driven swipe interface.

Learn more at https://jakegaylor.com or https://github.com/jhgaylor`;

candidateConfig.resumeUrl = 'https://jakegaylor.com/JakeGaylor_resume.pdf';
candidateConfig.linkedinUrl = 'https://linkedin.com/in/jhgaylor';
candidateConfig.githubUrl = 'https://github.com/jhgaylor';
candidateConfig.websiteUrl = 'https://jakegaylor.com';
candidateConfig.websiteText = `Available to Hire
Your Next
Technical Cofounder
15+ years of experience helping companies build better tech organizations, launch new products, and grow with confidence.

AI Agents & MCP Contributions
- Created and maintained AI agents for "auto change password", "auto login", and "auto change email" using LangChain, Crewai, and a custom agent framework.
- Member of the MCP Hosting Working Group, scaling and deploying MCP servers for community and enterprise use.
- Open-source contributions: Dart SDK, Express MCP binding tool, Hirebase, Candidate Job Search, Text Extraction MCP servers, and a GitOps deployment tool.
- Publicly hosted MCP servers for hands-on testing and demos.
- Developed an LLM-driven mobile app with a Tinder-style swipe interface.

How I Accelerate Success
Ship Fast, Learn Fast: Deliver the first quantum of value quickly, then iterate based on real user feedback.
MVP in days, not months: Data-driven iterations and continuous feedback loops.
Supercharge Your Teams: Provide proven tools and practices for fast, reliable delivery.

MVP in days, not monthsData-driven iterationsContinuous user feedback loops
Supercharge Your TeamsDeliver faster with proven tools and practices that
scale across your organization.
Best-in-class development workflowsAutomated testing and
deploymentCost-effective scaling solutions
Find Product Market FitTransform engineering teams into product teams that own
the full lifecycle from idea to customer value.
Data-driven feature developmentCustomer usage insightsValue-driven
prioritization
Companies I've Helped GrowI've had the privilege of working with innovative
companies to help scale their technology and teams.
ProtectwiseAcquired by Verizon
"Jake was instrumental in building our cloud-native security platform. His
technical leadership helped shape our architecture and team practices."-
Devops Engineer, Protectwise
Food Service Warehouse
"We were deploying c# on vSphere when Jake joined on our first Nodejs backend
team. He had been using Docker, we identified Kubernetes as our next step, and
Jake hit the ground running. Our node services had the fastest release cycle
in the company."- Architect, Food Service Warehouse
Cloaked
"Jake is a force for good unlike any other. He migrated our infra to a cheaper
and more scalable system, crafted a CI pipeline that accelerated deploys by
30x, and taught the whole company how to make data-driven decisions by
building and showcasing an entire product analytics stack. And that was just
his first 6 months."- Director Platform Engineering, Cloaked
CyberGRXNow ProcessUnity
"I watched Jake redo a build and deploy process over the span of 3 days, whip
up a presentation, and get every engineer in the org up to speed using it to
deploy new services, a moment I'll never forget because our productivity
EXPLODED afterwards."- Software Engineer, CyberGRX
Inception Health
"I also wanted to second (third? Fourth?) Jake's skills here. I don't have
anything unique to add as everyone else has already covered it, but this man
will help you achieve what you need."- Senior Platform Engineer, Inception
Health
Magic
"Jake worked in the pit with [the operations team] and everyday came in with
killer energy. Everyone else told us how to work around problems. Jake built
us better tools."- Magician, Magic
From Zero to ProductionStart with the smallest valuable feature set, then
evolve based on real user feedback and data.
Development Philosophy
Focus on core user value firstShip early, gather feedbackIterate based on
usage dataScale what works
Technical Foundation
Production-ready infrastructureAutomated testing and deploymentBuilt-in
monitoring and analyticsScalable architecture patterns
Development Approach
Quick StartsFrom idea to first user value in days
Data-DrivenEvery feature backed by usage metrics
Rapid IterationContinuous improvement based on feedback
Supercharge Feature DeliveryStop waiting weeks for features to ship. Eliminate
manual tasks. Give your teams the tools and automation they need to go to
production with confidence.
Common Pain Points
Slow, manual deployment processesInconsistent environments causing
issuesLimited visibility into system healthSecurity patches falling behind
The Solution
Automated pipelines for instant feedbackInfrastructure as code for
consistencyReal-time monitoring and alertsAutomated security updates
Quick Feedback
Automated test runsCode quality checksSecurity scanning
Continuous Delivery
One-click deploymentsAutomated rollbacksEnvironment promotion
Full Visibility
Performance metricsError trackingUser analytics
Impact on Your Team
Faster Deployments
Less Manual Work
24/7 System Monitoring
Confidence in Delivery
Build Product Minded TeamsTransform your engineering teams into data driven
teams that understand customer needs and deliver measurable business value.
Common Challenges
Features built without clear success metricsLimited understanding of customer
behaviorDisconnect between technical and business goalsNo feedback loop from
production to planning
The Transformation
Data-driven feature development and iterationReal user behavior insights
inform decisionsClear metrics tied to business outcomesContinuous learning
from production data
Analytics That Matter
Feature usage trackingUser journey mappingPerformance impact
Experimentation
A/B testing frameworkFeature flagsControlled rollouts
Customer Feedback
In-app surveysUsage analyticsSupport insights
Results in Teams That
Focus on Customer Value
Make Data-Driven Decisions
Innovate Continuously
Ship with Confidence
Modern Cloud-Native StackLeveraging industry-leading tools and practices for
rapid, reliable delivery
Platform
AWS cloud infrastructureKubernetes orchestrationCloudflare edge
networkingTerraform infrastructure as code
Delivery
GitOps workflowContinuous Integration pipelinesAutomated Continuous
DeploymentInfrastructure automation
Observability
Product usage analyticsSystem TelemetryA/B testingError tracking & Crash
Reporting
Are We a Good Fit?I specialize in modern web technologies and cloud
infrastructure. Let's make sure we are a good match.
Great Fits
SaaS ApplicationsWeb applications, APIs, and cloud-native services
Infrastructure as CodeAWS, Kubernetes, Terraform, and modern cloud platforms
Developer ExperienceCI/CD pipelines, development workflows, and team
productivity
Software DeliveryDeployment automation, monitoring, and operational excellence
Technical LeadershipArchitecture decisions, team guidance, and technology
strategy
Not Great Fits
Design WorkWhile I can do a little design work, you dont want me creating your
user interfaces.
Security Penetration TestingWhile I implement secure practices, I'm not a
dedicated security auditor
IoT & Firmware DevelopmentI don't work with embedded systems or hardware-level
programming
Complex AlgorithmsDeep computer science problems or algorithmic optimization
Machine LearningWhile I can integrate ML services, I don't develop ML models
© 2024 Jake Gaylor. All rights reserved.`;

export { serverConfig, candidateConfig };