import { MongoClient } from 'mongodb';
import { useState } from 'react';

export default function AdviserSelection() {
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [adviserCount, setAdviserCount] = useState(0);

  async function handleSelectInstructor() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('myDatabase');
    const instructorCollection = db.collection('instructors');

    // Query the database for an instructor who has been assigned as an adviser less than two times
    const availableInstructors = await instructorCollection.find({ adviserCount: { $lt: 2 } }).toArray();

    // Choose a random instructor from the available ones
    const randomIndex = Math.floor(Math.random() * availableInstructors.length);
    const selectedInstructor = availableInstructors[randomIndex];

    // Update the selected instructor's adviserCount in the database
    await instructorCollection.updateOne({ _id: selectedInstructor._id }, { $inc: { adviserCount: 1 } });

    // Update the state to reflect the selected instructor
    setSelectedInstructor(selectedInstructor.name);
    setAdviserCount(selectedInstructor.adviserCount + 1);

    client.close();
  }

  return (
    <div>
      <h2>Select an adviser</h2>
      {selectedInstructor ? (
        <p>
          You have selected {selectedInstructor} as your adviser. They have been assigned as an adviser {adviserCount} times.
        </p>
      ) : (
        <button onClick={handleSelectInstructor}>Select Adviser</button>
      )}
    </div>
  );
}