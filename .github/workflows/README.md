# PR Analysis Workflow

## Required Permissions

### AWS

#### CodeArtifact (Optional)

These permissions are required if `use-codeartifact` is `true`.

 - `codeartifact:GetAuthorizationToken`
 - `codeartifact:ReadFromRepository`
 - `sts:GetServiceBearerToken`

# Build Workflow

## Required Permissions

### AWS

#### CodeArtifact (Optional)

These permissions are required if `use-codeartifact` is `true`.

 - `codeartifact:GetAuthorizationToken`
 - `codeartifact:ReadFromRepository`
 - `sts:GetServiceBearerToken`

#### Elastic Container Registry (ECR)

 - `ecr:GetAuthorizationToken`
 - `ecr:PutImage`
 - `ecr:BatchCheckLayerAvailability`
 - `ecr:InitiateLayerUpload`
 - `ecr:UploadLayerPart`
 - `ecr:CompleteLayerUpload`

# Deploy Workflow

## Required Permissions

### AWS

#### Elastic Container Registry (ECR)

 - `ecr:GetAuthorizationToken`

#### Elastic Container Service (ECS)

 - `ecs:RegisterTaskDefinition`
 - `ecs:DescribeServices`
 - `ecs:UpdateService`

#### Identity and Access Management (IAM)

- `iam:PassRole`
