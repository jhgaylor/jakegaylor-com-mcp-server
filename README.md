# MCP Server - Example Deployment

This repository serves as an example deployment of [me-mcp-server](https://github.com/jhgaylor/me-mcp-server) - a Model Context Protocol (MCP) server that allows AI assistants to access your professional information.

## What is me-mcp-server?

The me-mcp-server is a MCP implementation that provides AI assistants with structured access to:
- Your resume and professional profile
- Job search preferences
- LinkedIn and personal website information

## This Example Deployment

This repository demonstrates how to deploy the me-mcp-server with:
- Docker and Docker Compose
- Automatic HTTPS certificates via Traefik
- YAML-based configuration

## Deployment Instructions

1. Fork or clone this repository
2. Create your `me.yaml` file with your personal details (see example below)
3. Update the `docker-compose.yml` file:
   ```yaml
   volumes:
     - ./me.yaml:/app/me.yaml  # Mount your config file
   environment:
     - SERVER_NAME=your-domain  # Your identifier
   labels:
     - "traefik.http.routers.mcp-server.rule=Host(`mcp.your-domain.com`)"  # Your domain
   ```
4. Deploy with Docker Compose: `docker-compose up -d`
5. Point your domain to your server's IP address

## Configuration

The `me.yaml` file controls what information will be shared with AI assistants:

```yaml
# Personal information
name: Your Name
resume_url: https://yourdomain.com/resume.pdf
website_url: https://yourdomain.com
linkedin_url: https://linkedin.com/in/yourusername
github_url: https://github.com/yourusername

# Optional content (can be loaded from URLs above if not specified)
resume_text: |
  Your resume text here...
  
website_text: |
  Content from your website (optional)

# Job search preferences
job_search:
  min_salary: 100000
  max_salary: 200000
  location: Remote
  company_type: Startup
  company_size: 1-10
  industry: Software
  description: "Brief description of what you're looking for"
```

## me-mcp-server Features

The deployed server will provide the following capabilities to AI assistants:

### Prompts
- **JobSearch** - Generate job search instructions tailored to your profile with specified salary range, location, and company type preferences.

### Resources
- **Resume Text** - Access your full resume text (`candidate-info://resume`)
- **Resume URL** - Get the URL to your resume PDF (`candidate-info://resume-url`)
- **LinkedIn Profile URL** - Access your LinkedIn profile (`candidate-info://linkedin-url`) 
- **Website URL** - Get your personal website URL (`candidate-info://website-url`)
- **Website Contents** - Fetch and analyze the HTML contents of your website (`candidate-info://website-contents`)

## Technical Details

- **TLS**: Uses Traefik with Let's Encrypt for automatic HTTPS certificate management
- **Integration Options**: Works with existing reverse proxy setups by removing the Traefik labels and configuring your own proxy
- **Configuration**: Uses a YAML file for easier editing and version control

## Security Considerations

- Ensure your server has proper security measures in place
- Consider the sensitivity of the information in your me.yaml file
- Use HTTPS for all traffic (enabled by default)

## For More Information

For more details about the me-mcp-server itself, including configuration options, transport mechanisms, and local development, visit the main project repository: [jhgaylor/me-mcp-server](https://github.com/jhgaylor/me-mcp-server)
