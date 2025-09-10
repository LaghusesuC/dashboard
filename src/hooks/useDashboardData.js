// src/hooks/useDashboardData.js
import { useState, useEffect } from 'react';

export const useDashboardData = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [grades, setGrades] = useState({});
  const [schedule, setSchedule] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchData = setTimeout(() => {
      setCourses([
        {
          id: 1,
          name: 'Advanced Mathematics',
          code: 'MATH301',
          instructor: 'Dr. Sarah Williams',
          credits: 4,
          grade: 'A',
          status: 'Active',
          image: 'https://source.unsplash.com/random/800x600/?mathematics',
          progress: 85
        },
        {
          id: 2,
          name: 'Computer Science',
          code: 'CS205',
          instructor: 'Prof. Michael Chen',
          credits: 3,
          grade: 'B+',
          status: 'Active',
          image: 'https://source.unsplash.com/random/800x600/?computer',
          progress: 78
        },
        {
          id: 3,
          name: 'Physics Fundamentals',
          code: 'PHYS101',
          instructor: 'Dr. Robert Kim',
          credits: 4,
          grade: 'A-',
          status: 'Active',
          image: 'https://source.unsplash.com/random/800x600/?physics',
          progress: 92
        },
        {
          id: 4,
          name: 'English Literature',
          code: 'ENG210',
          instructor: 'Prof. Emily Davis',
          credits: 3,
          grade: 'B',
          status: 'Active',
          image: 'https://source.unsplash.com/random/800x600/?books',
          progress: 70
        }
      ]);

      setAssignments([
        {
          id: 1,
          title: 'Programming Language C-5',
          course: 'C Programming',
          dueDate: '2023-12-15',
          formattedDueDate: 'Dec 15, 2023',
          status: 'Due Soon',
          progress: 75,
          description: 'Complete problems 1-20 from Chapter 5',
          timeRemaining: '3 days left',
          priority: 'high'
        },
        {
          id: 2,
          title: 'Programming Language Phthon-5',
          course: 'Phython Programming',
          dueDate: '2023-12-10',
          formattedDueDate: 'Dec 10, 2023',
          status: 'Overdue',
          progress: 45,
          description: 'Implement the user authentication module',
          timeRemaining: 'Overdue by 2 days',
          priority: 'critical'
        },
        {
          id: 3,
          title: 'Aptitude Level-10',
          course: 'A,B,C,D,G,H',
          dueDate: '2023-12-20',
          formattedDueDate: 'Dec 20, 2023',
          status: 'In Progress',
          progress: 30,
          description: 'Write report on the optics experiment',
          timeRemaining: '8 days left',
          priority: 'medium'
        },
        {
          id: 4,
          title: 'Communication',
          course: 'Engish Grammer',
          dueDate: '2023-12-18',
          formattedDueDate: 'Dec 18, 2023',
          status: 'Not Started',
          progress: 0,
          description: 'Analyze symbolism in "The Great Gatsby"',
          timeRemaining: '6 days left',
          priority: 'medium'
        }
      ]);

      setGrades({
        overallGPA: 3.85,
        previousGPA: 3.72,
        bySubject: [
          { subject: 'Data Structure', grade: 92, classAvg: 85 },
          { subject: 'Networking', grade: 87, classAvg: 82 },
          { subject: 'Operating System', grade: 94, classAvg: 88 },
          { subject: 'DBMS', grade: 85, classAvg: 83 },
          { subject: 'Mathematics', grade: 88, classAvg: 84 },
          { subject: 'System Design', grade: 96, classAvg: 91 }
        ]
      });

      setSchedule([
        { day: 'Monday', time: '09:00 AM', course: 'Advanced Mathematics', room: 'Room 201', type: 'Lecture' },
        { day: 'Monday', time: '11:00 AM', course: 'Physics Fundamentals', room: 'Lab 305', type: 'Lab' },
        { day: 'Tuesday', time: '10:00 AM', course: 'Computer Science', room: 'Room 410', type: 'Lecture' },
        { day: 'Wednesday', time: '01:00 PM', course: 'English Literature', room: 'Room 105', type: 'Seminar' },
        { day: 'Thursday', time: '09:00 AM', course: 'Advanced Mathematics', room: 'Room 201', type: 'Tutorial' },
        { day: 'Friday', time: '02:00 PM', course: 'Physics Fundamentals', room: 'Room 205', type: 'Lecture' }
      ]);

      setAnnouncements([
        {
          id: 1,
          title: "Final Exam Schedule Published",
          content: "Final exams will be held from December 18-22. Please check your individual course pages for specific times and locations.",
          date: "Today, 9:30 AM",
          type: "Important",
          read: false
        },
        {
          id: 2,
          title: "Library Extended Hours",
          content: "The campus library will be open until midnight during finals week to support student study needs.",
          date: "Yesterday, 2:15 PM",
          type: "Information",
          read: true
        },
        {
          id: 3,
          title: "Career Services Workshop",
          content: "Join us this Friday for a resume building workshop with industry professionals from top tech companies.",
          date: "Dec 5, 2023",
          type: "Event",
          read: false
        }
      ]);

      setLoading(false);
    }, 1200);

    return () => clearTimeout(fetchData);
  }, []);

  return { loading, courses, assignments, grades, schedule, announcements };
};