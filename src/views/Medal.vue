<template>
    <mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
      <template slot-scope="scope">
        <td class="is-center">{{scope.row.collage}}</td>
        <td class="is-center">{{scope.row.gold}}</td>
        <td class="is-center">{{scope.row.silver}}</td>
        <td class="is-center">{{scope.row.bronze}}</td>
        <td class="is-center">{{scope.row.place}}</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
</template>

<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: '学院', name: 'collage',  align: 'center',},
          { title: '金牌', name: 'gold',  align: 'center' },
          { title: '银牌', name: 'silver', align: 'center' },
          { title: '铜牌', name: 'bronze',  align: 'center'},
          { title: '名次', name: 'place',  align: 'center' }
      ],
      list: [
        {
            collage: '交通',
            gold: 1,
            silver: 1,
           bronze: 1,
            place: 1,
          },
        {
            collage: '交通',
            gold: 1,
            silver: 1,
           bronze: 1,
            place: 1,
          },
         {
            collage: '交通',
            gold: 1,
            silver: 1,
           bronze: 1,
            place: 1,
          },
          {
            collage: '交通',
            gold: 1,
            silver: 1,
           bronze: 1,
            place: 1,
          },
        {
            collage: '交通',
            gold: 1,
            silver: 1,
           bronze: 1,
            place: 1,
          },
         {
            collage: '交通',
            gold: 1,
            silver: 1,
           bronze: 1,
            place: 1,
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>