import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const filenames = fs.readdirSync(postsDirectory);
    const allPostsData = filenames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = filenames.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}