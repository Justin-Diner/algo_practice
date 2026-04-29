class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();

        for (let [course, pre] of prerequisites) {
            if (!preMap.has(course)) {
                preMap.set(course, []);
            }
            preMap.get(course).push(pre);
        }

        const visiting = new Set();

        const dfs = (crs) => {
            if (visiting.has(crs)) {
                return false;
            }

            if (!preMap.has(crs) || preMap.get(crs).length === 0) {
                return true;
            }

            visiting.add(crs);
            for (let pre of preMap.get(crs)) {
                if (!dfs(pre)) {
                    return false;
                }
            }
            visiting.delete(crs);
            preMap.set(crs, []);
            return true;
        }
        
        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }
        return true;
    }
}

// My solution O(V + E) time complexity, O(V + E) space complexity.
class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = new Map();

        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, []);
        }

        for (let [crs, pre] of prerequisites) {
            adjList.get(crs).push(pre);
        }

        const visiting = new Set();
        const dfs = (crs) => {
            if (visiting.has(crs)) {
                return false;
            }

            visiting.add(crs);
            for (const prereq of adjList.get(crs)) {
                if (!dfs(prereq)) {
                    return false;
                }
            }

            visiting.delete(crs);
            adjList.set(crs, []);
            return true;
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }
        return true;
    }
}
