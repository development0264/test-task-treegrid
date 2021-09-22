export let sampleData: Object[] = [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 37,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 38, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 39, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 40, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 41, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 42,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            { taskID: 43, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 44, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 45, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 46, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 47, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 48,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 49,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 50,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 51, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 52, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 53, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 54, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 55, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 56, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 57,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 58,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 59, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 60, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 61, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 62, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 63, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 64, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 65,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 66,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [
                        { taskID: 67, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 68, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 69, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 70, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 71, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 72, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 73,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 74,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 75,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 76, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 77, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 78, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 79, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 80, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 81, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 82,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 83,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 84, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 85, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 86, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 87, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 88, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 89, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 90,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 91,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            { taskID: 92, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 93, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 94, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 95, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 96, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 97, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 98, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 99,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            { taskID: 100, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 101,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 102, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 103, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 104, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 105, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 106,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            { taskID: 107, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 108, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 109, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 110, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 111, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 112,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 113,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 114,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 115, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 116, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 117, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 118, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 119, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 120, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 121,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 122,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 123, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 124, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 125, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 126, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 127, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 128, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 129,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 130,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [
                        { taskID: 131, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 132, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 133, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 134, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 135, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 136, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 137,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 138, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 139, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 140, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 141, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 142,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            { taskID: 143, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 144, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 145, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 146, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 147, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 148,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 149,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 150,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 151, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 152, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 153, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 154, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 155, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 156, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 157,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 158,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 159, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 160, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 161, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 162, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 163, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 164, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 165,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 166,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [
                        { taskID: 167, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 168, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 169, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 170, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 171, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 172, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 173,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 174,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 175,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 176, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 177, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 178, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 179, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 180, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 181, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 182,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 183,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 184, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 185, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 186, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 187, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 188, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 189, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 190,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 191,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            { taskID: 192, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 193, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 194, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 195, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 196, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 197, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 198, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 199,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            { taskID: 200, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 201,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 202, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 203, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 204, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 205, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 206,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            { taskID: 207, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 208, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 209, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 210, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 211, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 212,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 213,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 214,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 215, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 216, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 217, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 218, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 219, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 220, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 221,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 222,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 223, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 224, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 225, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 226, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 227, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 228, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 229,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 230,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [
                        { taskID: 231, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 232, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 233, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 234, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 235, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 236, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 237,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 238, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 239, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 240, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 241, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 242,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            { taskID: 243, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 244, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 245, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 246, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 247, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 248,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 249,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 250,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 251, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 252, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 253, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 254, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 255, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 256, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 257,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 258,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 259, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 260, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 261, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 262, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 263, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 264, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 265,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 266,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [
                        { taskID: 267, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 268, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 269, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 270, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 271, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 272, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 273,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 274,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 275,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 276, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 277, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 278, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 279, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 280, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 281, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 282,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [{
                    taskID: 283,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    subtasks: [
                        { taskID: 284, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 285, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 286, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 287, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 288, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 289, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 290,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 291,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            { taskID: 292, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 293, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 294, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 295, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 296, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 297, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 298, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 299,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            { taskID: 300, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 301, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 302, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 303, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 304, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 305, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 306, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 307, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 308, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 309, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 310, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 311, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 312, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 313, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 314, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 315, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 316, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 317, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 318, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 319, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 320, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 321, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 322, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 323, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 324, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 325, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 326, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 327, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 328, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 329, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 330, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 331, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 332, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 333, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 334, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 335, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 336, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 337, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 338, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 339, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 340, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 341, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 342, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 343, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 344, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 345, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 346, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 347, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 348, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 349, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 350, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 351, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 352, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 353, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 354, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 355, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 356, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 357, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 358, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 359, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 360, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 361, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 362, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 363, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 364, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 365, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 366, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 367, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 368, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 369, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 370, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 371, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 372, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 373, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 374, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 375, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 376, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 377, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 378, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 379, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 380, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 381, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 382, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 383, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 384, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 385, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 386, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 387, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 388, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 389, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 390, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 391, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 392, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 393, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 394, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 395, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 396, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 397, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 398, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 399, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 400, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 401, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 402, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 403, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 404, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 405, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 406, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 407, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 408, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 409, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 410, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 411, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 412, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 413, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 414, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 415, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 416, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 417, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 418, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 419, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 420, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 421, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 422, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 423, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 424, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 425, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 426, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 427, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 428, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 429, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 430, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 431, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 432, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 433, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 434, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 435, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 436, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 437, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 438, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 439, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 440, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 441, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 442, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 443, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 444, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 445, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 446, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 447, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 448, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 449, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 450, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 451, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 452, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 453, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 454, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 455, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 456, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 457, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 458, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 459, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 460, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 461, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 462, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 463, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 464, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 465, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 466, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 467, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 468, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 469, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 470, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 471, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 472, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 473, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 474, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 475, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 476, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 477, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 478, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 479, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 480, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 481, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 482, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 483, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 484, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 485, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 486, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 487, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 488, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 489, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 490, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 491, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 492, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 493, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 494, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 495, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 496, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 497, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 498, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 499, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 500, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 501, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 502, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 503, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 504, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 505, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 506, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 507, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 508, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 509, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 510, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 511, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 512, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 513, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 514, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 515, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 516, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 517, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 518, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 519, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 520, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 521, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 522, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 523, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 524, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 525, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 526, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 527, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 528, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 529, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 530, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 531, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 532, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 533, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 534, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 535, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 536, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 537, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 538, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 539, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 540, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 541, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 542, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 543, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 544, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 545, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 546, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 547, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 548, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 549, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 550, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 551, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 552, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 553, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 554, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 555, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 556, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 557, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 558, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 559, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 560, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 561, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 562, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 563, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 564, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 565, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 566, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 567, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 568, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 569, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 570, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 571, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 572, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 573, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 574, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 575, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 576, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 577, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 578, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 579, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 580, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 581, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 582, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 583, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 584, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 585, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 586, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 587, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 588, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 589, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 590, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 591, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 592, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 593, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 594, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 595, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 596, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 597, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 598, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 599, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 600, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 601, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 602, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 603, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 604, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 605, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 606, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 607, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 608, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 609, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 610, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 611, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 612, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 613, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 614, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 615, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 616, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 617, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 618, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 619, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 620, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 621, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 622, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 623, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 624, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 625, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 626, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 627, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 628, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 629, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 630, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 631, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 632, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 633, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 634, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 635, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 636, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 637, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 638, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 639, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 640, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 641, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 642, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 643, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 644, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 645, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 646, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 647, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 648, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 649, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 650, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 651, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 652, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 653, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 654, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 655, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 656, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 657, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 658, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 659, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 660, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 661, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 662, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 663, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 664, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 665, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 666, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 667, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 668, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 669, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 670, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 671, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 672, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 673, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 674, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 675, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 676, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 677, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 678, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 679, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 680, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 681, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 682, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 683, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 684, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 685, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 686, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 687, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 688, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 689, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 690, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 691, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 692, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 693, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 694, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 695, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 696, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 697, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 698, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 699, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 700, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 701, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 702, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 703, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 704, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 705, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 706, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 707, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 708, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 709, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 710, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 711, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 712, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 713, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 714, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 715, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 716, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 717, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 718, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 719, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 720, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 721, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 722, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 723, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 724, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 725, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 726, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 727, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 728, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 729, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 730, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 731, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 732, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 733, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 734, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 735, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 736, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 737, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 738, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 739, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 740, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 741, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 742, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 743, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 744, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 745, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 746, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 747, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 748, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 749, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 750, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 751, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 752, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 753, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 754, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 755, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 756, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 757, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 758, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 759, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 760, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 761, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 762, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 763, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 764, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 765, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 766, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 767, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 768, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 769, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 770, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 771, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 772, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 773, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 774, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 775, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 776, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 777, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 778, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 779, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 780, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 781, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 782, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 783, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 784, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 785, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 786, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 787, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 788, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 789, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 790, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 791, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 792, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 793, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 794, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 795, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 796, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 797, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 798, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 799, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 800, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 801, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 802, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 803, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 804, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 805, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 806, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 807, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 808, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 809, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 810, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 811, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 812, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 813, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 814, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 815, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 816, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 817, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 818, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 819, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 820, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 821, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 822, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 823, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 824, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 825, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 826, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 827, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 828, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 829, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 830, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 831, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 832, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 833, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 834, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 835, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 836, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 837, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 838, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 839, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 840, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 841, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 842, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 843, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 844, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 845, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 846, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 847, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 848, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 849, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 850, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 851, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 852, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 853, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 854, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 855, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 856, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 857, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 858, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 859, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 860, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 861, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 862, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 863, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 864, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 865, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 866, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 867, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 868, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 869, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 870, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 871, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 872, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 873, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 874, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 875, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 876, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 877, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 878, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 879, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 880, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 881, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 882, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 883, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 884, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 885, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 886, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 887, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 888, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 889, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 890, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 891, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 892, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 893, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 894, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 895, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 896, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 897, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 898, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 899, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 900, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    },

    {
        taskID: 901, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 902, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 903, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 904, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 905, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 906, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 907, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 908, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 909, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 910, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 911, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 912, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 913, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 914, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 915, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 916, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 917, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 918, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 919, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 920, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 921, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 922, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', duration: 12, subtasks: [
                        { taskID: 923, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 924, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 925, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 926, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 927, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 928, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 929, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 930, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 931, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 932, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 933, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 934, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 935, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 936, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 937, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false, isInExpandState: true, subtasks: [
            { taskID: 938, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 939, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
            { taskID: 940, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 941, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 942, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', isInExpandState: false, approved: false, subtasks: [
            { taskID: 943, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 944, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 945, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 946, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
            { taskID: 947, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 948, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 949, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 950, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 951, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 952, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 953, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 954, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 955, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 956, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 957, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, ubtasks: [{
                    taskID: 958, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 959, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 960, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 961, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 962, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 963, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 964, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },
            {
                taskID: 965, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [{
                    taskID: 966, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                        { taskID: 967, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 968, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 969, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 970, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 971, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 972, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    },
    {
        taskID: 973, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
            {
                taskID: 974, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [{
                    taskID: 975, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false, subtasks: [
                        { taskID: 976, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 977, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 978, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 979, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 980, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 981, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true },


                    ]
                }]
            },
            {
                taskID: 982, taskName: 'Phase 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'High', approved: false, duration: 12, subtasks: [{
                    taskID: 983, taskName: 'Implementation Module 2', startDate: new Date('02/17/2017'), endDate: new Date('02/28/2017'), priority: 'Critical', approved: false, duration: 12, subtasks: [
                        { taskID: 984, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 985, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 986, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 987, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 988, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 989, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 990, taskName: 'Phase 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11, subtasks: [
                    {
                        taskID: 991, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 992, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                            { taskID: 993, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                            { taskID: 994, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                            { taskID: 995, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                            { taskID: 996, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                            { taskID: 997, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            { taskID: 998, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                        ]
                    },
                    {
                        taskID: 999, taskName: 'Implementation Module 3', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11, subtasks: [
                            { taskID: 1000, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        ]
                    }
                ]
            }
        ]
    }
    
];