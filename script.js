fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    // Start recursive processing with a batch size of 10
    processInBatches(data, 10)
  })
  .catch((error) => console.error('Error fetching data:', error))

function processInBatches(data, batchSize, currentIndex = 0) {
  // Base case: Stop when all records are processed
  if (currentIndex >= data.length) {
    console.log('All records have been processed.')
    return
  }

  // Get the current batch
  const batch = data.slice(currentIndex, currentIndex + batchSize)
  console.log('Processing batch:', batch)

  // Simulate a delay (optional, for visualization purposes)
  setTimeout(() => {
    // Recursively process the next batch
    processInBatches(data, batchSize, currentIndex + batchSize)
  }, 1000) // 1-second delay between processing batches
}
