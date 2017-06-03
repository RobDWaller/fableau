"use strict"

class User
{
    constructor(data)
    {
        this.data = data;
    }

    getTableauData()
    {
        return this.data.map(function(row) {
            return {
                'id': row.id,
                'username': row.username
            }
        });
    }
}

export default User;
