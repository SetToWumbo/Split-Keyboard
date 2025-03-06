function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[132.7721176,-156.9915272],[124.6858201,-91.1339192]]).appendArc([126.4271738,-88.9050883],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.1589918,-86.7278949]).appendArc([145.902122,-84.5139958],{"radius":2,"clockwise":false,"large":false}).appendPoint([144.8347,-75.2449173]).appendArc([146.5778302,-73.0310182],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.7863558,-70.4269387]).appendArc([169.4738145,-68.9619204],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.3049292,-65.8757323]).appendArc([172.1314545,-64.3985472],{"radius":2,"clockwise":true,"large":false}).appendPoint([191.8497722,-63.365154]).appendArc([193.7173276,-61.7000383],{"radius":2,"clockwise":false,"large":false}).appendPoint([194.8872348,-54.7532717]).appendArc([196.894367,-53.0857197],{"radius":2,"clockwise":true,"large":false}).appendPoint([216.3471139,-53.4252687]).appendArc([218.2762013,-55.0471619],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.4970061,-61.3934766]).appendArc([221.4260936,-63.0153698],{"radius":2,"clockwise":false,"large":false}).appendPoint([238.1445824,-63.3071921]).appendArc([240.0697707,-64.9093513],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.3981984,-66.5286978]).appendArc([242.3233867,-68.1308569],{"radius":2,"clockwise":false,"large":false}).appendPoint([281.1027925,-68.8077539]).appendArc([283.0678435,-70.8207505],{"radius":2,"clockwise":true,"large":false}).appendPoint([282.3996119,-171.294666]).appendArc([282.01769,-172.4569354],{"radius":2,"clockwise":true,"large":false}).appendPoint([269.1002902,-190.236211]).appendArc([266.2433226,-190.6306861],{"radius":2,"clockwise":true,"large":false}).appendPoint([252.2489949,-179.5876691]).appendArc([251.7267971,-179.290554],{"radius":2,"clockwise":false,"large":false}).appendPoint([231.8538265,-171.6620353]).appendArc([231.3539451,-171.5409874],{"radius":2,"clockwise":false,"large":false}).appendPoint([211.4002462,-169.3646329]).appendArc([209.6280568,-167.1673671],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.7805592,-156.2020389]).appendArc([208.8268938,-153.9932948],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.5200127,-153.4571059]).appendArc([178.2430677,-153.4714352],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.9987765,-158.7331464]).appendArc([132.7721176,-156.9915272],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        