import React, { useState } from 'react';
import axios from 'axios';

const DiaryEntry: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (file) {
      formData.append('file', file);
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post('/api/diary-entries', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle the response here
    } catch (error) {
      // Handle the error here
    }
  };

  return (
    <div>
      <h2>New Diary Entry</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default DiaryEntry;