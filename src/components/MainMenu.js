import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems{
          edges{
            node{
              items{
                title
                object_slug
              }
            }
          }
        }
      }
      
    `} render={props => (
        <div>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={item.object_slug} key={item.title}>
                    {item.title}
                </Link>
            ))}
        </div>
    )}/>
)

export default MainMenu;