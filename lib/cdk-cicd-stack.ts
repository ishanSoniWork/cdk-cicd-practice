import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new CodePipeline(this, 'firstPipeline', {
      pipelineName: 'FirstPipeline',
      synth: new ShellStep('initialCommands', {
        input: CodePipelineSource.gitHub('ishanSoniWork/cdk-cicd-practice', 'main'),
        commands: [
          'pwd',
          'ls',
          'cd cdk-cicd-practice',
          'npm ci',
          'npx cdk synth'
        ]
      }),
    })
  }
}
