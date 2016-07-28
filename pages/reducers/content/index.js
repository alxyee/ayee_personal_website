import {fromJS} from 'immutable'

import education from './education'
import employment from './employment'
import internships from './internships'
import publications from './publications'
import projects from './projects'

function content(state = fromJS({
    "education": education,
    "employment": employment,
    "internships": internships,
    "publications": publications,
    "projects": projects
}), action = null) {
    switch (action.type) {
        default:
            return state
    }
}

export default content