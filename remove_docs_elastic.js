const { Client } = require('@elastic/elasticsearch');
const config = require('config');
const elasticConfig = config.get('elastic');

// Update the client configuration to point to your local Elasticsearch instance
const client = new Client({
  node: 'http://localhost:9200', // Change the URL to match your Elasticsearch configuration
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
});

async function deleteIndex(indexName) {
  try {
    const response = await client.indices.delete({
      index: indexName
    });

    if (response.body && response.body.acknowledged) {
      console.log(`Index "${indexName}" has been deleted.`);
    } else {
      console.log(`Failed to delete index "${indexName}".`);
    }
  } catch (error) {
    console.error('Error deleting index:', error);
  } finally {
    await client.close();
  }
}

// Specify the index you want to delete (e.g., 'razbot-gpt')
const indexToDelete = 'razbot-gpt';

deleteIndex(indexToDelete);
