import axios from "axios";

const API = "http://localhost:5000/api";

async function runTests() {
  console.log("--- Starting End-to-End API Verification ---");

  // 1. Health Check
  try {
    const health = await axios.get(`${API}/health`);
    console.log("✅ 1. Health Check:", health.data.status);
  } catch (err: any) {
    console.error("❌ 1. Health Check failed:", err.message);
  }

  // 2. Fetch Blog Posts
  let testPostSlug = "";
  try {
    const postsRes = await axios.get(`${API}/blog/posts`);
    console.log(`✅ 2. Fetch Blog Posts: ${postsRes.data.data.posts.length} posts retrieved`);
    testPostSlug = postsRes.data.data.posts[0]?.slug;
  } catch (err: any) {
    console.error("❌ 2. Fetch Blog Posts failed:", err.message);
  }

  // 3. Fetch Single Post
  if (testPostSlug) {
    try {
      const singleRes = await axios.get(`${API}/blog/posts/${testPostSlug}`);
      console.log(`✅ 3. Fetch Single Post ("${singleRes.data.data.title}") views: ${singleRes.data.data.views}`);
    } catch (err: any) {
      console.error("❌ 3. Fetch Single Post failed:", err.message);
    }
  }

  // 4. Create New Blog Post
  let createdPostId = "";
  try {
    const createRes = await axios.post(`${API}/blog/posts`, {
      title: "Automated Test Post: Why Teens Excel at No-Code",
      excerpt: "Demonstrating dynamic API creation in the new Tactyqal blog architecture.",
      content: "## The Power of Speed\n\nYoung founders have no legacy inertia. They ship fast and learn.",
      categoryName: "No-Code & Tech",
      tags: ["Test", "NoCode", "Automation"],
      published: true,
      authorName: "Devuty Tester",
    });
    createdPostId = createRes.data.data._id || createRes.data.data.id;
    console.log(`✅ 4. Create Post Success: ID ${createdPostId}`);
  } catch (err: any) {
    console.error("❌ 4. Create Post failed:", err.response?.data || err.message);
  }

  // 5. Update Post
  if (createdPostId) {
    try {
      const updateRes = await axios.put(`${API}/blog/posts/${createdPostId}`, {
        title: "Automated Test Post: (UPDATED TITLE)",
        excerpt: "Updated excerpt text confirming PUT endpoint works.",
      });
      console.log(`✅ 5. Update Post Success: "${updateRes.data.data.title}"`);
    } catch (err: any) {
      console.error("❌ 5. Update Post failed:", err.message);
    }
  }

  // 6. Delete Post
  if (createdPostId) {
    try {
      const deleteRes = await axios.delete(`${API}/blog/posts/${createdPostId}`);
      console.log(`✅ 6. Delete Post Success:`, deleteRes.data.message);
    } catch (err: any) {
      console.error("❌ 6. Delete Post failed:", err.message);
    }
  }

  // 7. Test Consultation Lead Submission
  try {
    const leadRes = await axios.post(`${API}/consultation`, {
      parentName: "Meenakshi Gupta",
      studentName: "Kabir Gupta",
      email: "meenakshi@example.com",
      phone: "+91 98047 72106",
      studentAge: 16,
      goalInterest: "1:1 App Building & Mentoring",
      notes: "Interested in building an AI app for college portfolio.",
    });
    console.log(`✅ 7. Book Consultation Lead Success:`, leadRes.data.message);
  } catch (err: any) {
    console.error("❌ 7. Lead Submission failed:", err.message);
  }

  // 8. Stats Check
  try {
    const statsRes = await axios.get(`${API}/blog/stats`);
    console.log(`✅ 8. Stats API: Total Posts: ${statsRes.data.data.totalPosts}, Total Views: ${statsRes.data.data.totalViews}`);
  } catch (err: any) {
    console.error("❌ 8. Stats API failed:", err.message);
  }

  console.log("--- All API End-to-End Tests Finished ---");
}

runTests();
