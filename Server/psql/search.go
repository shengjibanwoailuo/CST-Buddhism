package psql

type inf struct {
	Booktype string `json:"booktype"`
	Bookname  string `json:"bookname"`
	Readnumber string `json:"readnumber"`
	Bookintroduce string `json:"bookintroduce"`
	Contentintroduce string `json:"contentintroduce"`
	Yuanwen string `json:"yuanwen"`
	Yiwen string `json:"yiwen"`
}
var List = []inf{} //所有人的信息，切片存储
func SearchResult(name string){

	List = (List)[0:0]
	var one inf
	sqlStatement := `SELECT bookname,readnumber,bookintroduce,contentintroduce,yuanwen,yiwen FROM fojing WHERE bookname=$1`
	row := db.QueryRow(sqlStatement,name)
	err := row.Scan(&one.Bookname, &one.Readnumber,&one.Bookintroduce,&one.Contentintroduce,&one.Yuanwen,&one.Yiwen)
	if err==nil {
		one.Booktype="fojing"
		List = append(List,one)
	}

	sqlStatement = `SELECT bookname,readnumber,bookintroduce,contentintroduce,yuanwen FROM fozhou WHERE bookname=$1`
	row = db.QueryRow(sqlStatement,name)
	err = row.Scan(&one.Bookname, &one.Readnumber,&one.Bookintroduce,&one.Contentintroduce,&one.Yuanwen)
	if err==nil {
		one.Booktype="fozhou"
		List = append(List,one)
	}

	if len(List)<1 {

			str := "%"+string(name)+"%"
			rows, err := db.Query("select bookname,readnumber,bookintroduce,contentintroduce,yuanwen,yiwen from public.fojing where bookname like $1",str)
			checkError(err)
			for rows.Next() {
				err = rows.Scan(&one.Bookname, &one.Readnumber,&one.Bookintroduce,&one.Contentintroduce,&one.Yuanwen,&one.Yiwen)
				checkError(err)
				one.Booktype="fojing"
				List = append(List,one)
			}

			rows, err = db.Query("select bookname,readnumber,bookintroduce,contentintroduce,yuanwen from public.fozhou where bookname like $1",str)
			checkError(err)
			for rows.Next() {
				err = rows.Scan(&one.Bookname, &one.Readnumber,&one.Bookintroduce,&one.Contentintroduce,&one.Yuanwen)
				checkError(err)
				one.Booktype="fozhou"
				List = append(List,one)
			}

	}

}
