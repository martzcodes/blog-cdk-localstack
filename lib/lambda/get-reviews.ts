import { DynamoDB } from "aws-sdk";

const db = new DynamoDB.DocumentClient();

export const handler = async (event: any): Promise<any> => {
    console.log(event);
  try {
    const items = await db
      .scan({
        TableName: "Beer",
      })
      .promise();
    console.log(items);
    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify(items),
    };
  } catch (e) {
    console.error("GET failed! ", e);
    return {
      statusCode: 400,
      headers: {},
      body: `GET failed: ${e}`,
    };
  }
};
