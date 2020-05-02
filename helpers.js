const moment = require('moment')

module.exports.fromNow = x => moment(x).fromNow()


// <!-- <% for (let i of body) { %>
//   <tr>
//     <td><%= i.id %></td>	
//     <td><%= i.full_name %></td>
//     <td><%= i.phone_number %></td>
//     <td><%= i.course_type %></td>
//     <td><%= i.craeted %></td>
//     <td>remove</td>
//   </tr>
//   <% } %> -->