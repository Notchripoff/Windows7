import { db } from './firebase';

async function submitTime(mapName, time, videoUrl) {
    try {
        await db.collection('times').add({ mapName, time, videoUrl });
        alert('Time submitted successfully!');
        loadHome(); // Reload home page after submission
    } catch (error) {
        console.error('Error submitting time:', error);
        alert('Error submitting time');
    }
}

async function fetchLeaderboard() {
    try {
        const snapshot = await db.collection('times').get();
        const times = snapshot.docs.map(doc => doc.data());
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = times.map(time => `
            <div>
                <p>Map: ${time.mapName}</p>
                <p>Time: ${time.time}</p>
                ${time.videoUrl ? `<p><a href="${time.videoUrl}" target="_blank">Watch Video</a></p>` : ''}
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        document.getElementById('leaderboard').innerText = 'Error loading leaderboard';
    }
}
