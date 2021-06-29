import { BaseEntity } from 'Entity/BaseEntity';

class LibertyMonument extends BaseEntity {
   value = '🗽';
}
class TokyoTower extends BaseEntity {
   value = '🗼';
}
class Mosque extends BaseEntity {
   value = '🕌';
}
class Church extends BaseEntity {
   value = '⛪';
}
class Kaaba extends BaseEntity {
   value = '🕋';
}
class Moai extends BaseEntity {
   value = '🗿';
}
class Mountain extends BaseEntity {
   value = '🏔️';
}
class Beach extends BaseEntity {
   value = '🏖️';
}
class Park extends BaseEntity {
   value = '🏞️';
}
class Stadium extends BaseEntity {
   value = '🏟️';
}
class ClassicalBuilding extends BaseEntity {
   value = '🏛️';
}
class Houses extends BaseEntity {
   value = '🏘️';
}
class School extends BaseEntity {
   value = '🏫';
}
class Factory extends BaseEntity {
   value = '🏭';
}
class Office extends BaseEntity {
   value = '🏤';
}



export const Places = [
   LibertyMonument, TokyoTower, Mosque,
   Church, Kaaba, Moai, Mountain,
   Beach, Park, Stadium, ClassicalBuilding,
   Houses, School, Factory, Office
];