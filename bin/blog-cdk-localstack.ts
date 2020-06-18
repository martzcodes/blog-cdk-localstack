#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BlogCdkLocalstackStack } from '../lib/blog-cdk-localstack-stack';

const app = new cdk.App();
new BlogCdkLocalstackStack(app, 'BlogCdkLocalstackStack');
