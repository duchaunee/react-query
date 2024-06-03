
# Important: Nếu trong queryKey có các biến, mà giá trị biến đó thay đổi khi re-render thì queryFn sẽ được gọi lại (phân trang thì cho page vào queryKey,...)

`======================================================

# I. Các query có setting staleTime [KHÁC NHAU]
Nếu data của lần query thứ 1 xuất hiện lâu hơn thời gian staleTime của lần query thứ 2 thì nó sẽ bị gọi lại ở lần thứ 2, dù cho có stale hay chưa. 

- Ví dụ: useQuery({ queryKey: ['todos'], queryFn: fetchTodos, staleTime: 10*1000 }) xuất hiện 5.4s trước, bây giờ chúng ta gọi lại useQuery({ queryKey: ['todos'], queryFn: fetchTodos, staleTime: 2.5*1000 }) thì rõ ràng cái data của lần 1 dù nó chưa được cho là stale nhưng nó xuất hiện 5.4s trước và lâu hơn thời gian staleTime là 2.5s nên nó sẽ bị gọi lại ở lần 2.

`======================================================

# II. Các query có setting staleTime [GIỐNG NHAU]
stale	actice
---------------
còn		còn --> TRẢ VỀ CACHED DATA LUÔN
còn	 	hết --> `KHÔNG SỬ DỤNG TH NÀY`
hết		còn --> TRẢ VỀ CACHED DATA SAU ĐÓ FETCH NGẦM VÀ UPDATE DATA MỚI
hết 	hết --> FETCH LẠI DATA MỚI LUÔN


`======================================================


# III. staleTime và cacheTime

## `staleTime` bắt đầu đếm ngược sau khi fetch api (là sau khi chạy xong queryFn)
- Cái tab stale trong dev tool react-query là nó show ra có bao nhiêu cái query ĐANG `STALE + ACTIVE` (là cái query hiện tại), :v lẽ ra tab stale phải hiển thị các trạng thái query đã stale chứ nhỉ, đây nó lại hiển thị là `đã stale + active` không hiểu react-query làm gì @@

## `cacheTime` bắt đầu đếm ngược khi không còn component nào subcribe đến cái query đó 


`======================================================


# IV. Nếu queryKey giống nhau + hàm queryFn GIỐNG/KHÁC nhau? 

## CÁCH HÌNH DUNG CACHE NÓ SẼ NHƯ NÀO LÀ CHỈ CẦN QUAN TÂM staleTime (cả 2 trường hợp giống/khác staleTime)

```jsx
function A() {
  const result = useQuery({ queryKey: ['users'], queryFn: fetch_user, staleTime: stale_time_a })
}

function B() {
  const result = useQuery({ queryKey: ['users'], queryFn: fetch_user, staleTime: stale_time_b })
}

```
## XEM FILE EXCEL NHÉ, NOTE Ở ĐÓ